import { useState } from 'react'
import { supabase } from "../supabase/connection"
import { useNavigate } from "react-router"

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        })

        if (error) {
        setError(error.message)
        } else {
        console.log('Usuario logueado:', data.user)
        navigate('/schedule') // Redirige a la página /schedule
        }

        setLoading(false)
    }
    
    return (
        <div className="w-full min-h-[calc(100dvh-128px)] flex flex-col items-center justify-center">
            <form onSubmit={handleLogin} className="w-full max-w-64 p-3 flex flex-col gap-2 items-center">
                <label htmlFor="email">Enter your email</label>
                <input 
                    className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="name@infotrack.sr" 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <label htmlFor="password">Enter your password</label>
                <input 
                    className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2"
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <button className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2 bg-blue-500 text-gray-100">
                    {loading ? 'Loading...' : 'Sing In'}
                </button>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
            </form>
            <a className="text-blue-500" href="#">Forgot your password?</a>
        </div>
    )
}

export default LoginForm