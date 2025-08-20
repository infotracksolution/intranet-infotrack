const LoginForm = () => {

    return (
        <div className="w-full min-h-[calc(100dvh-128px)] flex flex-col items-center justify-center">
            <form className="w-full max-w-64 p-3 flex flex-col gap-2 items-center">
                <label htmlFor="email">Enter your email</label>
                <input 
                    className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="name@infotrack.sr" 
                    required 
                />
                <label htmlFor="password">Enter your password</label>
                <input 
                    className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2"
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    required 
                />
                <button className="w-full h-10 rounded-md border-1 border-solid border-blue-500 pl-2 bg-blue-500 text-gray-100">
                    Sign In
                </button>
            </form>
            <a className="text-blue-500" href="#">Forgot your password?</a>
        </div>
    )
}

export default LoginForm