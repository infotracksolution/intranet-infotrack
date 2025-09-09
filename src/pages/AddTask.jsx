import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { supabase } from "../supabase/connection"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AddTask = () => {
    const navigate = useNavigate()

    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ date, setDate ] = useState('')
    const [ start, setStart ] = useState('')
    const [ end, setEnd ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ dwo, setDwo ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ bwo, setBwo ] = useState('')
    const [selectedTechs, setSelectedTechs] = useState([]);

     useEffect(() => {
        const checkSession = async () => {
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
            navigate("/", { replace: true }); // redirige si no hay usuario
        }
        };
        checkSession();
    }, [navigate]);

    const technicians = ["Adrien", "Pedro", "Addiel", "Jouri"];

    const handleCheckboxChange = (tech) => {
        setSelectedTechs((prev) =>
        prev.includes(tech)
            ? prev.filter((t) => t !== tech) // si ya está, lo quitamos
            : [...prev, tech]                // si no está, lo agregamos
        );
    };


    const handleTask = async (e) => {
        e.preventDefault()
    
        const { data, error } = await supabase.from('schedule').insert({name, description, date, start, end, status, dwo, url, bwo, technicians: selectedTechs,})
    
        if(error) {
            console.error(error)
        }else{
            console.log('Task send')
            navigate('/schedule')
        }
    }

    return (
        <>
        <Header />
        <div className="w-full flex items-center justify-center py-12">
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
                        required
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
                    <label htmlFor="dwo">DWO Number:</label>
                    <input 
                        type="text" 
                        name="dwo" 
                        id="dwo" 
                        placeholder="12345678"
                        onChange={(e) => setDwo(e.target.value)}
                        className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                    />
                    <label htmlFor="url">MHelpDesk URL:</label>
                    <input 
                        type="url" 
                        name="url" 
                        id="url" 
                        placeholder="mhelpdesk.infotrack.com"
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                    />
                    <label htmlFor="bwo">BWO Number:</label>
                    <input 
                        type="text" 
                        name="bwo" 
                        id="bwo" 
                        placeholder="123"
                        onChange={(e) => setBwo(e.target.value)}
                        className="w-full h-8 border-1 border-solid border-blue-500 rounded pl-2"
                    />
                    <p>Técnicos:</p>
                    {technicians.map((tech) => (
                        <label key={tech} style={{ display: "block", marginLeft: "10px" }}>
                        <input
                            type="checkbox"
                            checked={selectedTechs.includes(tech)}
                            onChange={() => handleCheckboxChange(tech)}
                        />
                        {tech}
                        </label>
                    ))}
                    <a href="/schedule" className="w-full">
                        <button 
                            type="button" 
                            className="w-full h-8 rounded-md border-2 border-solid border-red-500 text-red-500 font-bold bg-red-300 hover:bg-red-500 hover:text-gray-100 cursor-pointer" 
                        >
                            Cancel
                        </button>
                    </a>
                    <button 
                        type="submit" 
                        className="w-full h-8 rounded-md border-2 border-solid border-green-600 text-green-600 font-bold bg-green-300 hover:bg-green-600 hover:text-gray-100 cursor-pointer"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default AddTask