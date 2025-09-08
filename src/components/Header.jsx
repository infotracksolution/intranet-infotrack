import { useEffect, useState } from "react"
import { supabase } from "../supabase/connection"

const Header = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
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

    /*
    
    */

    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-500">Infotrack Solutions</div>
                    <ul className="flex space-x-8 text-gray-700 text-base font-medium">
                        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="/schedule" className="hover:text-blue-500 transition">Schedule</a></li>
                        <li><a href="/sop" className="hover:text-blue-500 transition">SOP</a></li>
                        <li><a href="/workers" className="hover:text-blue-500 transition">Workers</a></li>
                        <li><a href="/rules" className="hover:text-blue-500 transition">Internal Rules</a></li>
                        <li><a href="/documents" className="hover:text-blue-500 transition">Documents</a></li>
                    </ul>
                    {user && (
                            <button className="bg-blue-500 rounded-md text-white px-4 py-1 cursor-pointer" onClick={async () => {
                                await supabase.auth.signOut()
                            }}>
                                Log Out
                            </button>
                        )
                    }
            </nav>
        </header>
    )
}

export default Header