// import { NavLink } from "react-router-dom";

import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";

const Detail = () => {
    return (
        <div className="bg-gray-900">
            <div className="flex" >
                <SideNavbar />
                <div className="w-3/5 border border-gray-600 h-full border-t-0">
                    <Header />
                    <CardTimeLine />
                    <FormInput />
                </div>
                <div className="w-2/5 h-12 h-full">
                    <Search />
                    <TrendCards />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Detail;