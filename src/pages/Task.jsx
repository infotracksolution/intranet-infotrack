import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/connection";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Task = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

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
                fetchComments()
                setTask(data);
            }
            setLoading(false);
            }

            if (id) {
            fetchTask();
            }
        }, [id]);

    const fetchComments = async () => {
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .eq('taskid', id);

        if (error) {
            console.error(error);
        } else {
            setComments(data);
        }
    }
    const handleComment = async (e) => {
        //e.preventDefault(); // Evita el comportamiento por defecto del formulario
        // Aquí puedes manejar el envío del comentario, por ejemplo, guardarlo en la base de datos
        const { data, error } = await supabase.from('comments').insert({author, comment, taskid: id})
    
        if(error) {
            console.error(error)
        }else{
            console.log('Task send')
            navigate('/task/' + id)
        }
        // Limpia los campos después de enviar el comentario
        setAuthor('');
        setComment('');
    }

    return (
        <>
            <Header />
            {loading && (
                <div className="w-full min-h-[calc(100dvh-128px)] flex items-center justify-center">
                    <p className="text-gray-600 text-lg">Loading task...</p>
                </div>
            )}
            {!loading && task && (
                <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6 flex flex-col gap-2 text-lg">
                    <a href="/schedule" className="text-blue-500 font-bold mb-8 text-lg">⬅ Go back</a>
                    <div className="flex items-center justify-between">
                        <h1 className="text-gray-800 text-2xl font-bold">{task.name}</h1>
                        <button className="cursor-pointer min-w-fit border-solid border-1 border-blue-500 rounded-md px-6 py-1 text-blue-500">Edit Task</button>
                    </div>
                    <p className="font-bold text-lg text-gray-800">Description:</p>
                    <p className="text-gray-800 text-lg whitespace-pre-line pl-4">{task.description}</p>
                    <p className="font-bold text-lg text-gray-800">Date:</p>
                    <p className="pl-4">{task.date}</p>
                    <p className="font-bold text-lg text-gray-800">Start Time:</p>
                    <p className="pl-4">{task.start}</p>
                    <p className="font-bold text-lg text-gray-800">End Time:</p>
                    <p className="pl-4">{task.end}</p>
                    <p className="text-gray-800 text-lg whitespace-pre-line font-bold">Technician:</p>
                    <ul className="list-disc list-inside">
                        {task.technicians && task.technicians.length > 0 ? (
                            task.technicians.map((tech) => (
                                <li className="pl-4" key={tech}>{tech}</li>
                            ))
                        ) : (
                            <li>No technicians asigned yet</li>
                        )}
                    </ul>
                    <p className="font-bold text-gray-800 text-lg">Status: {task.status}</p>
                    <p className="font-bold text-lg text-gray-800">Comments:</p>
                    {comments.length === 0 ? (
                        <p className="text-gray-800 text-lg">No comments yet. Be the first to comment!</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {comments.map((c) => (
                                <div key={c.id} className="border-solid border-2 border-gray-300 rounded-md p-4">
                                    <p className="font-bold text-gray-800">{c.author}:</p>
                                    <p className="text-gray-800 whitespace-pre-line">{c.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="w-full flex flex-col gap-4 mt-8">
                        <p className="text-gray-800 text-xl">Make a comment:</p>
                        <form onSubmit={handleComment} className="flex flex-col gap-2 w-full">
                            <input 
                                className="border-solid border-2 border-blue-500 rounded-md h-10 px-2 text-lg" 
                                type="text" 
                                name="author" 
                                id="author" 
                                placeholder="Your name"
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                            <textarea className="border-solid border-2 border-blue-500 rounded-md h-30 px-2 text-lg" name="comment" id="comment" placeholder="Your comment here" onChange={(e) => setComment(e.target.value)} required></textarea>
                            <button className="bg-blue-500 text-white text-lg w-full rounded-md h-10 cursor-pointer">Send comment</button>
                        </form>
                    </div>
                </div>)
            }
            <Footer />
        </>
    )
}

export default Task