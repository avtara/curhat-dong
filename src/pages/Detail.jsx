// import { NavLink } from "react-router-dom";

import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";
import { GetApi } from "../libs/api";

const Detail = () => {
    const { data, error } = GetApi();
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
                    {!data && <div className="flow-root m-6 inline">
                        <div className="flex-2">
                            <p className="text-sm leading-6 font-medium text-white">Loading ...</p>
                        </div>
                    </div>
                    }
                    {error && <div className="flow-root m-6 inline">
                        <div className="flex-2">
                            <p className="text-sm leading-6 font-medium text-white">An error has occurred ...</p>
                        </div>
                    </div>
                    }
                    {data && <TrendCards data={data} />}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Detail;