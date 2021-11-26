import useSWR from "swr";

import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
    const { data, error } = useSWR(
        "https://api.thenewsapi.com/v1/news/top?api_token=ZPu927rAikF9eNSWOvKk9VjBv4tH0exMCrxVp0bI&locale=id&language=id&limit=2",
        fetcher
    );

    console.log(data, error)
    return (
        <div className="bg-gray-900">
            <div className="flex" >
                <SideNavbar />
                <div className="w-3/5 border border-gray-600 h-full border-t-0">
                    <Header />
                    <FormInput />
                    <CardTimeLine />
                    <CardTimeLine />

                    <CardTimeLine />
                    <CardTimeLine />
                </div>
                <div className="w-2/5 h-12 h-full">
                    <Search />
                    {data && <TrendCards data={data}/>}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;