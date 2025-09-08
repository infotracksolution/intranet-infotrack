import Header from "../components/Header"
import Footer from "../components/Footer"
import { supabase } from "../supabase/connection"
import { useNavigate } from "react-router"

import { useState, useEffect } from "react"

const Documents = () => {
    const navigate = useNavigate()

    const [ showForm, setShowForm ] = useState(false)
    const [ name, setName ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ type, setType ] = useState('')
    const [ categoryId, setCategoryId ] = useState('')
    const [ internals, setInternals ] =  useState([])
    const [ externals, setExternals ] =  useState([])
    const [ others, setOthers ] =  useState([])

    const [user, setUser] = useState(null)

    useEffect(() => {
        getInternals()
        getExternals()
        getOthers()
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

    async function getInternals(){
        const { data, error } = await supabase.from('documents').select().eq('categoryId', 'internal')
        setInternals(data)
    }

    async function getExternals(){
        const { data, error } = await supabase.from('documents').select().eq('categoryId', 'external')
        setExternals(data)
    }

    async function getOthers(){
        const { data, error } = await supabase.from('documents').select().eq('categoryId', 'other')
        setOthers(data)
    }

    const handleDocument = async (e) => {
        e.preventDefault()

        console.log(url, name)
        const { data, error } = await supabase.from('documents').insert({categoryId, name, type, url})

        if(error) {
            console.error(error)
        }else{
            console.log('Document send')
            setShowForm(false)
            navigate('/documents')
        }
    }

    return (
        <>
            <Header />
                <div className="w-full max-w-7xl min-h-[calc(100dvh-128px)] m-auto p-6">
                    {user && (
                        <button onClick={() => {setShowForm(true)}} className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4 cursor-pointer">Add new document</button>
                    )}
                    <div className="flex flex-col gap-4 py-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-xl">Internal Documents</h2>
                            <ul className="w-full">
                                {
                                    internals.map((internal) => (
                                        <li key={internal.id} className="flex items-center justify-between border-b-1 border-b-solid border-b-gray-400 py-2">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={"./"+internal.type+".svg"} 
                                                    alt="Document Icon" 
                                                    className="w-8"
                                                />
                                                <p className="text-gray-600">{internal.name}</p>
                                            </div>
                                            <div className="flex gap-4 px-4 items-center justify-center">
                                                <a href={internal.url+"/edit?usp=drive_link"}>
                                                    <img 
                                                        src="./see.svg" 
                                                        alt="See icon" 
                                                        className="w-6"
                                                    />
                                                </a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <h2 className="font-bold text-xl">External Documents</h2>
                            <ul className="w-full">
                                {
                                    externals.map((external) => (
                                        <li key={external.id} className="flex items-center justify-between border-b-1 border-b-solid border-b-gray-400 py-2">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={"./"+external.type+".svg"} 
                                                    alt="Document Icon" 
                                                    className="w-8"
                                                />
                                                <p className="text-gray-600">{external.name}</p>
                                            </div>
                                            <div className="flex gap-4 px-4 items-center justify-center">
                                                <a href={external.url+"/edit?usp=drive_link"}>
                                                    <img 
                                                        src="./see.svg" 
                                                        alt="See icon" 
                                                        className="w-6"
                                                    />
                                                </a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <h2 className="font-bold text-xl">Others Documents</h2>
                            <ul className="w-full">
                                {
                                    others.map((other) => (
                                        <li key={other.id} className="flex items-center justify-between border-b-1 border-b-solid border-b-gray-400 py-2">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={"./"+other.type+".svg"} 
                                                    alt="Document Icon" 
                                                    className="w-8"
                                                />
                                                <p className="text-gray-600">{other.name}</p>
                                            </div>
                                            <div className="flex gap-4 px-4 items-center justify-center">
                                                <a href={other.url+"/edit?usp=drive_link"}>
                                                    <img 
                                                        src="./see.svg" 
                                                        alt="See icon" 
                                                        className="w-6"
                                                    />
                                                </a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            <Footer />
            {
                showForm && (
                    <div className="w-full h-dvh bg-gray-800/80 fixed top-0 flex items-center justify-center">
                        <div className="w-full max-w-xl flex flex-col gap-4 py-8 px-6 text-center bg-gray-100 rounded-md">
                            <p className="font-bold text-2xl">Add a new document</p>
                            <form onSubmit={handleDocument} className="flex flex-col items-start gap-2 py-8">
                                <label htmlFor="title">Name:</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    placeholder="Example template"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-10 border-1 border-solid border-blue-500 rounded pl-2"
                                />
                                <label htmlFor="url">URL:</label>
                                <input 
                                    type="url" 
                                    name="url" 
                                    id="url" 
                                    placeholder="https://drive.google.com/user/ID"
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full h-10 border-1 border-solid border-blue-500 rounded-md pl-2"
                                />
                                <label htmlFor="type">Type:</label>
                                <select 
                                    defaultValue={type} 
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full h-10 border-1 border-solid border-blue-500 rounded-md" 
                                    name="type" 
                                    id="type"
                                >
                                    <option value=""></option>
                                    <option value="docs">Word file</option>
                                    <option value="xls">Excel file</option>
                                    <option value="pdf">PDF file</option>
                                    <option value="rar">RAR file</option>
                                </select>
                                <label htmlFor="category">Category:</label>
                                <select 
                                    defaultValue={categoryId} 
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="w-full h-10 border-1 border-solid border-blue-500 rounded-md" 
                                    name="category" 
                                    id="category"
                                >
                                    <option value=""></option>
                                    <option value="internal">Internal</option>
                                    <option value="external">External</option>
                                    <option value="other">Others</option>
                                </select>
                                <button 
                                    type="button" 
                                    className="w-full h-10 rounded-md border-2 border-solid border-red-500 text-red-500 font-bold bg-red-300 hover:bg-red-500 hover:text-gray-100 cursor-pointer" 
                                    onClick={() => {setShowForm(false)}}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="w-full h-10 rounded-md border-2 border-solid border-green-600 text-green-600 font-bold bg-green-300 hover:bg-green-600 hover:text-gray-100 cursor-pointer"
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

export default Documents