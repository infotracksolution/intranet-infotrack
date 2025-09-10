import Header from "../components/Header"
import Footer from "../components/Footer"
import { supabase } from "../supabase/connection"
import { Link } from "react-router"

import { useState, useEffect } from "react"

const Schedule = () => {
    const [dateTarget, setDatetarget] = useState(() => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    })

    const [ schedule, setSchedule ] =  useState([])

    const [user, setUser] = useState(null)

    useEffect(() => {
        getSchedule(dateTarget)
        // Obtenemos el usuario actual al cargar el componente
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }

        getUser()

        // Escuchamos cambios de sesión para detectar login/logout
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
        })

        return () => {
        authListener.subscription.unsubscribe()
        }

    }, [dateTarget])

    const getSchedule = async (dateToFetch) => {
        const { data, error } = await supabase.from('schedule').select().eq('date', dateToFetch)
        setSchedule(data)
    }

    const deleteTask = async (id) => {
        const { error } = await supabase
            .from('schedule')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Error al eliminar:', error.message)
            return
        }

        // Quitar la entrada del estado local
        setSchedule(schedule.filter(entry => entry.id !== id))
    }

    return (
        <>
            <Header />
                <div className="w-full max-w-7xl min-h-[calc(100dvh-128px)] m-auto p-6">
                    {user && (
                        <div>
                            <a href="/addtask">
                                <button className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4 cursor-pointer">Add new task</button>
                            </a>
                            <div className="py-4 flex items-center gap-4">
                                <label>Select date: </label>
                                <input
                                    type="date"
                                    value={dateTarget}
                                    onChange={(e) => setDatetarget(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-xl">Schedule List for {dateTarget} </h2>
                            <ul className="w-full">
                                {schedule.length === 0 ? (
                                    <p className="text-gray-600">No tasks for this day</p>
                                ) : (
                                    <ul>
                                        {
                                            schedule.map((task) => (
                                                <li key={task.id} className="flex flex-col items-start gap-2 p-4 bg-blue-400 rounded-md mb-4">
                                                    <div className="flex flex-col items-start gap-2">
                                                        <p className="text-gray-800 font-bold text-xl">{task.name}</p>
                                                        <p className="text-gray-600">{task.date}</p>
                                                        <p className="text-gray-600">From {task.start} to {task.end}</p>
                                                        <p className="text-gray-800 text-lg whitespace-pre-line">{task.description}</p>
                                                        <p className="text-gray-800 text-lg whitespace-pre-line font-bold">Technician:</p>
                                                        <ul>
                                                            {task.technicians && task.technicians.length > 0 ? (
                                                                task.technicians.map((tech) => (
                                                                    <li key={tech}>- {tech}</li>
                                                                ))
                                                            ) : (
                                                                <li>No technicians asigned yet</li>
                                                            )}
                                                        </ul>
                                                        <p className="font-bold text-gray-800 text-lg">Status: {task.status}</p>
                                                        <p className="font-bold text-gray-800 text-lg">Comments: 0</p>
                                                    </div>
                                                    <div className="w-full flex justify-end gap-2">
                                                        <Link to={`/task/${task.id}`}>
                                                            <button className="py-1 px-6 border-1 border-solid border-green-600 text-green-600 bg-green-300 font-bold rounded-md hover:bg-green-600 hover:text-white cursor-pointer">Details</button>
                                                        </Link>
                                                        {user && (
                                                            <button onClick={() => deleteTask(task.id)} className="py-1 px-6 border-1 border-solid border-red-600 text-red-600 bg-red-300 font-bold rounded-md hover:bg-red-600 hover:text-white cursor-pointer">Delete</button>
                                                        )}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Schedule