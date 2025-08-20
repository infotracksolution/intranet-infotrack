const Header = () => {
    return (
        <>
            <header className="bg-white shadow-md">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-500">Infotrack Solutions</div>
                    <ul className="flex space-x-8 text-gray-700 text-base font-medium">
                        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="/schedule" className="hover:text-blue-500 transition">Schedule</a></li>
                        <li><a href="/sop" className="hover:text-blue-500 transition">SOP</a></li>
                        <li><a href="/workers" className="hover:text-blue-500 transition">Workers</a></li>
                        <li><a href="/rules" className="hover:text-blue-500 transition">Internal Rules</a></li>
                        <li><a href="documents" className="hover:text-blue-500 transition">Documents</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header