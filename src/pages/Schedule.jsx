import Header from "../components/Header"
import Footer from "../components/Footer"
import { supabase } from "../supabase/connection"
import { useNavigate } from "react-router"

import { useState, useEffect } from "react"

const Schedule = () => {
    const navigate = useNavigate()
    /*const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayDate = `${year}-${month}-${day}`*/

    const [dateTarget, setDatetarget] = useState(() => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    })

    const [ showForm, setShowForm ] = useState(false)
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ date, setDate ] = useState('')
    const [ start, setStart ] = useState('')
    const [ end, setEnd ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ schedule, setSchedule ] =  useState([])
    //const [ targetDate, setTargetDate ] = useState(todayDate)

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

    }, [dateTarget ])

    const getSchedule = async (dateToFetch) => {
        const { data, error } = await supabase.from('schedule').select().eq('date', dateToFetch)
        setSchedule(data)
    }

    const handleTask = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase.from('schedule').insert({name, description, date, start, end, status})

        if(error) {
            console.error(error)
        }else{
            console.log('Task send')
            setShowForm(false)
            navigate('/schedule')
        }
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
                            <button onClick={() => {setShowForm(true)}} className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4 cursor-pointer">Add new task</button>
                            <div>
                                <label>Selecciona una fecha: </label>
                                <input
                                    type="date"
                                    value={dateTarget}
                                    onChange={(e) => setDatetarget(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col gap-4 py-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-xl">Schedule for Today</h2>
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
                                                        <p className="text-gray-800 text-lg">{task.description}</p>
                                                        <p className="font-bold text-gray-800 text-lg">Status: {task.status}</p>
                                                    </div>
                                                    <div className="w-full flex justify-end gap-2">
                                                        {
                                                            //<button className="py-1 px-6 border-1 border-solid border-green-600 text-green-600 bg-green-300 font-bold rounded-md hover:bg-green-600 hover:text-white cursor-pointer">Edit</button>
                                                        }
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
            {
                showForm && (
                    <div className="w-full h-dvh bg-gray-800/80 fixed top-0 flex items-center justify-center">
                        <div className="w-full max-w-xl flex flex-col gap-2 py-6 px-6 text-center bg-gray-100 rounded-md">
                            <p className="font-bold text-2xl">Add a new task</p>
                            <form onSubmit={handleTask} className="flex flex-col items-start gap-2 py-8">
                                <label htmlFor="title">Name:</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    placeholder="Example template"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="description">Description:</label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    placeholder="Example template"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full h-24 border-1 border-solid border-blue-500 rounded pl-2"
                                >
                                </textarea>
                                <label htmlFor="date">Date:</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    id="date" 
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="start">Start time:</label>
                                <input 
                                    type="time" 
                                    name="start" 
                                    id="start" 
                                    onChange={(e) => setStart(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="end">End time:</label>
                                <input 
                                    type="time" 
                                    name="end" 
                                    id="end" 
                                    onChange={(e) => setEnd(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="status">Status:</label>
                                <select 
                                    defaultValue={status} 
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded-md" 
                                    name="status" 
                                    id="status"
                                >
                                    <option value=""></option>
                                    <option value="new">New</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="close">Close</option>
                                </select>
                                <button 
                                    type="button" 
                                    className="w-full h-8 rounded-md border-2 border-solid border-red-500 text-red-500 font-bold bg-red-300 hover:bg-red-500 hover:text-gray-100 cursor-pointer" 
                                    onClick={() => {setShowForm(false)}}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="w-full h-8 rounded-md border-2 border-solid border-green-600 text-green-600 font-bold bg-green-300 hover:bg-green-600 hover:text-gray-100 cursor-pointer"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Schedule