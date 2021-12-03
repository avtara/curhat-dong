import { NavLink } from "react-router-dom";

const NotFound = () => {

    return (
        <div className="container text-center py-12 mx-auto">
            <h1 className="text-4xl font-semibold mb-4">404</h1>
            <p className=" mb-10">Sorry, We couldn't find what you are looking for!</p>
            <NavLink to="/" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 tracking-wider uppercase text-sm">Go Back</NavLink>
        </div>
    )
}

export default NotFound;