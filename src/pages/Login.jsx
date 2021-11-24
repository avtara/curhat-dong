import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 text-center">Login to CurhatDong</h3>
                <form action>
                    <div className="mt-4">
                        <div>
                            <label className="block text-gray-800" htmlFor="email">Email<label>
                                <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </label></label></div>
                        <div className="mt-4">
                            <label className="block text-gray-800">Password<label>
                                <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </label></label></div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <NavLink to="/" className="text-sm text-blue-600 hover:underline"> Created new account </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;