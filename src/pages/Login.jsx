import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { LOGIN } from "../graphql/query";
import { useHistory } from "react-router-dom";


const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();
    const history = useHistory();
    const client = useApolloClient();

    const is_login = sessionStorage.getItem('id');
    if (is_login) {
        history.push("/");
    }

    const handleSubmit = async e => {
        e.preventDefault();

        client
            .query({
                query: LOGIN,
                variables: {
                    usern: username,
                    pass: password
                }
            })
            .then(response => {
                const user_exists = response.data.users;
                if (user_exists.length === 1) {
                    sessionStorage.setItem('id', user_exists[0].id);
                    sessionStorage.setItem('username', user_exists[0].username);
                    sessionStorage.setItem('name', user_exists[0].name);
                    sessionStorage.setItem('photo', user_exists[0].photo);
                    history.push("/");
                } else {
                    setErr("Wrong username or password, please check again!")
                }
            });
    }
    return (
        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">Login to CurhatDong</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div>
                                {err && <label className="block text-error w-full px-4 py-2 mt-2" >{err}</label>}
                                <label className="block text-gray-800" htmlFor="email">Email<label>
                                    <input onChange={e => setUserName(e.target.value)} type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </label></label></div>
                            <div className="mt-4">
                                <label className="block text-gray-800">Password<label>
                                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </label></label></div>
                            <div className="flex items-baseline justify-between">
                                <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                                <NavLink to="/" className="text-sm text-blue-600 hover:underline"> Created new account </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;