import Header from "../components/Header"
import Footer from "../components/Footer"

import { useState } from "react"

const Profiles = () => {

    const [ showForm, setShowForm ] = useState(false)


    return (
        <>
            <Header />
            <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6">
                <button className="h-10 rounded-md border-1 border-solid border-blue-500 bg-blue-500 text-gray-100 px-4">Add new profile</button>
                <div className="w-full flex flex-col gap-2 items-center p-10">
                    <div className="w-full max-w-3xl border-1 border-solid border-gray-300 rounded-md p-8 flex flex-col">
                        <div className="w-full flex gap-10 pb-6">
                            <img className="w-40" src="./vite.svg" alt="Image profile" />
                            <div className="flex flex-col gap-2">
                                <p><strong className="mr-4">Name:</strong>John Doe</p>
                                <p><strong className="mr-4">Occupation:</strong>Technician</p>
                                <p><strong className="mr-4">Work ID:</strong>001</p>
                                <p><strong className="mr-4">Start data:</strong>01/05/2024</p>
                            </div>
                        </div>
                        <div className="w-full border-t-1 border-t-gray-300 border-t-solid pt-6 flex items-center justify-end gap-2">
                            <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-green-600 hover:border-green-600 cursor-pointer">Edit</button>
                            <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-red-600 hover:border-red-600 cursor-pointer">Delete</button>
                            <button className="rounded-md border-1 border-solid border-gray-400 px-4 py-1 text-gray-400 hover:text-gray-100 hover:bg-gray-600 hover:border-gray-600 cursor-pointer">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profiles