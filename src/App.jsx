import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl m-auto min-h-[calc(100dvh-128px)] p-6 text-center flex flex-col justify-center items-center">
        <p className="text-3xl font-bold text-gray-700">
          Welcome to the Infotrack Solutions Intranet.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default App
