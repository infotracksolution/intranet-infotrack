import { useEffect, useState } from "react"
import { supabase } from "../supabase/connection"

const Header = () => {
    const [user, setUser] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

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
                {/* Botón hamburguesa en móvil */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* Menú en md+ */}
                <ul className="hidden md:flex space-x-8 text-gray-700 text-base font-medium">
                    <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                    <li><a href="/schedule" className="hover:text-blue-500 transition">Schedule</a></li>
                    <li><a href="/sop" className="hover:text-blue-500 transition">SOP</a></li>
                    <li><a href="/workers" className="hover:text-blue-500 transition">Workers</a></li>
                    <li><a href="/rules" className="hover:text-blue-500 transition">Internal Rules</a></li>
                    <li><a href="/documents" className="hover:text-blue-500 transition">Documents</a></li>
                    <li><a href="/tutorials" className="hover:text-blue-500 transition">Tutorials</a></li>
                </ul>
                {user && (
                    <button className="hidden md:block bg-blue-500 rounded-md text-white px-4 py-1 cursor-pointer" onClick={async () => {
                        await supabase.auth.signOut()
                    }}>
                        Log Out
                    </button>
                )}
            </nav>
            {/* Menú móvil */}
            <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white shadow-lg`}>
                <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 text-base font-medium">
                    <li><a href="/" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="/schedule" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Schedule</a></li>
                    <li><a href="/sop" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>SOP</a></li>
                    <li><a href="/workers" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Workers</a></li>
                    <li><a href="/rules" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Internal Rules</a></li>
                    <li><a href="/documents" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Documents</a></li>
                    <li><a href="/tutorials" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Tutorials</a></li>
                    {user && (
                        <button className="bg-blue-500 rounded-md text-white px-4 py-1 mt-2" onClick={async () => {
                            await supabase.auth.signOut()
                            setMenuOpen(false)
                        }}>
                            Log Out
                        </button>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Header