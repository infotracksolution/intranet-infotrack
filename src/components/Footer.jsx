const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="w-full text-center py-4 text-xs text-blue-500">
            <p>Intranet - Infotrack Solution N.V</p>
            <p>Copyright © {year}</p>
        </footer>
    )
}

export default Footer