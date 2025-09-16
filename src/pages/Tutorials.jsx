import Header from "../components/Header"
import Footer from "../components/Footer"
import { supabase } from "../supabase/connection"
import { Link } from "react-router"

import { useState, useEffect } from "react"

const Tutorials = () => {

  const [ posts, setPosts ] =  useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
        getPost()
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

  const getPost = async () => {
    const { data, error } = await supabase.from('posts').select()
    setPosts(data)
  }
  
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6 flex flex-col items-start gap-4">
        {
          user && (
            <button className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4 cursor-pointer text-lg">Add new tutorial</button>
          )
        }
        {
          posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="border border-gray-400 py-4 px-4 rounded shadow">
                <h2 className="text-xl text-gray-900 font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 capitalize text-md">{post.type}</p>
                <p className="text-gray-700 text-md mb-4">{post.description}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-500">Read more</a>
              </div>
            ))
          ):(
            <p>No posts available</p>
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default Tutorials