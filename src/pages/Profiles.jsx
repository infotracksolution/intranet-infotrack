import Header from "../components/Header"
import Footer from "../components/Footer"

import { useState, useEffect } from "react"
import { supabase } from "../supabase/connection"

const Profiles = () => {

    const [ showForm, setShowForm ] = useState(false)
    const [ profiles, setProfiles ] =  useState([])
    const [ name, setName ] = useState('')
    const [ occupation, setOccupation ] = useState('')
    const [ work_id, setWork_id ] = useState('')
    const [ start, setStart ] = useState('')

    const [user, setUser] = useState(null)

    useEffect(() => {
        getProfiles()
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

    }, [])

    const getProfiles = async () => {
        const { data, error } = await supabase.from('profiles').select()
        setProfiles(data)
    }

    const handleTask = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase.from('profiles').insert({name, occupation, work_id, start})

        if(error) {
            console.error(error)
        }else{
            console.log('Profile send')
            setShowForm(false)
            navigate('/workers')
        }
    }

    return (
        <>
            <Header />
            <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6">
                {user && (
                    <button onClick={() => {setShowForm(true)}} className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4">Add new profile</button>
                )}
                <div className="w-full flex flex-col gap-2 items-center p-10">
                    {
                        profiles.map(profile => (
                            <div className="w-full max-w-3xl border-1 border-solid border-gray-300 rounded-md p-8 flex flex-col">
                                <div key={profile.id} className="w-full flex gap-10 pb-6">
                                    <img className="w-40" src="./vite.svg" alt="Image profile" />
                                    <div className="flex flex-col gap-2">
                                        <p><strong className="mr-4">Name:</strong>{profile.name}</p>
                                        <p><strong className="mr-4">Occupation:</strong>{profile.occupation}</p>
                                        <p><strong className="mr-4">Work ID:</strong>{profile.work_id}</p>
                                        <p><strong className="mr-4">Start data:</strong>{profile.start}</p>
                                    </div>
                                </div>
                                <div className="w-full border-t-1 border-t-gray-300 border-t-solid pt-6 flex items-center justify-end gap-2">
                                    {
                                        /*
                                        <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-green-600 hover:border-green-600 cursor-pointer">Edit</button>
                                        <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-red-600 hover:border-red-600 cursor-pointer">Delete</button>
                                        <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-gray-600 hover:border-gray-600 cursor-pointer">Details</button>
                                        */
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
            {
                showForm && (
                    <div className="w-full h-dvh bg-gray-800/80 fixed top-0 flex items-center justify-center">
                        <div className="w-full max-w-xl flex flex-col gap-2 py-6 px-6 text-center bg-gray-100 rounded-md">
                            <p className="font-bold text-2xl">Add a new task</p>
                            <form onSubmit={handleTask} className="flex flex-col items-start gap-2 py-8">
                                <label htmlFor="name">Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="John Doe"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="occupation">Occupation:</label>
                                <input 
                                    type="text" 
                                    name="occupation" 
                                    id="occupation" 
                                    placeholder="Technician"
                                    onChange={(e) => setOccupation(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="workId">Worker ID:</label>
                                <input 
                                    type="number" 
                                    name="workId" 
                                    id="workId" 
                                    placeholder="001"
                                    onChange={(e) => setWork_id(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="date">Start Date:</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    id="date" 
                                    onChange={(e) => setStart(e.target.value)}
                                    className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                                />
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

export default Profiles