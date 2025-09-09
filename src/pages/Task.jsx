import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/connection";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Task = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTask() {
            setLoading(true);
            const { data, error } = await supabase
                .from("schedule")
                .select("*")
                .eq("id", id) // filtra por id
                .single();   // espera un único registro

            if (error) {
                console.error(error);
            } else {
                setTask(data);
            }
            setLoading(false);
            }

            if (id) {
            fetchTask();
            }
        }, [id]);

    return (
        <>
            <Header />
            {loading && (
                <div className="w-full min-h-[calc(100dvh-128px)] flex items-center justify-center">
                    <p className="text-gray-600">Loading task...</p>
                </div>
            )}
            {!loading && task && (
                <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6 flex flex-col gap-2">
                    <a href="/schedule" className="text-blue-500 font-bold mb-8">⬅ Go back</a>
                    <div className="flex items-center justify-between">
                        <h1 className="text-gray-800 text-xl font-bold">{task.name}</h1>
                        <button className="cursor-pointer min-w-fit border-solid border-1 border-blue-500 rounded-md px-6 py-1 text-blue-500">Edit Task</button>
                    </div>
                    <p className="font-bold text-lg text-gray-800">Description:</p>
                    <p className="text-gray-800 text-lg whitespace-pre-line">{task.description}</p>
                    <p className="font-bold text-lg text-gray-800">Date:</p>
                    <p>{task.date}</p>
                    <p className="font-bold text-lg text-gray-800">Start Time:</p>
                    <p>{task.start}</p>
                    <p className="font-bold text-lg text-gray-800">End Time:</p>
                    <p>{task.end}</p>
                    <p className="text-gray-800 text-lg whitespace-pre-line font-bold">Technician:</p>
                    <ul className="list-disc list-inside">
                        {task.technicians && task.technicians.length > 0 ? (
                            task.technicians.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))
                        ) : (
                            <li>No technicians asigned yet</li>
                        )}
                    </ul>
                    <p className="font-bold text-gray-800 text-lg">Status: {task.status}</p>
                    <p className="font-bold text-lg text-gray-800">Comments:</p>
                    <p>No comments yet</p>
                    <div className="w-full flex flex-col gap-4 mt-8">
                        <p className="text-gray-800 text-lg">Make a comment:</p>
                        <form className="flex flex-col gap-2 w-full">
                            <input className="border-solid border-2 border-blue-500 rounded-md h-8 px-2" type="text" name="author" id="author" placeholder="Your Name"/>
                            <textarea className="border-solid border-2 border-blue-500 rounded-md h-20 px-2" name="comment" id="comment" placeholder="Your comment here"></textarea>
                            <button className="bg-blue-500 text-white w-full rounded-md h-8 cursor-pointer">Send comment</button>
                        </form>
                    </div>
                </div>)
            }
            <Footer />
        </>
    )
}

export default Task