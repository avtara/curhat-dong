import { NavLink, useHistory } from "react-router-dom";


const SideNavbar = () => {
    const history = useHistory();
    const handleLogout = async e => {
        sessionStorage.clear();
        history.push("/login");
    }
    return (
        <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto"><h2 className="px-4 py-2 text-xl font-semibold text-white">CurhatDong</h2>
            <nav className="mt-5 px-2">
                <NavLink className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-gray-300" to="/">
                    <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                    </svg>
                    Home
                </NavLink>
                <button onClick={handleLogout} className="bg-gray-400 w-48 mt-5 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
                    Logout
                </button>
            </nav>
            <div className="flex-shrink-0 flex hover:bg-gray-00 rounded-full p-4 mt-12 mr-2">
                <NavLink to="/" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-10 w-10 rounded-full" src={sessionStorage.getItem('photo')} alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-base leading-6 font-medium text-white">
                                {sessionStorage.getItem('name')}
                            </p>
                            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                @{sessionStorage.getItem('username')}
                            </p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default SideNavbar;