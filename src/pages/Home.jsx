import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import FormInput from "../components/FormAddPost";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";
import { GetApi } from "../libs/api";
import useSubscribePost from "../hooks/useSubscribe";
import { useHistory } from "react-router-dom";
import FormAddPost from "../components/FormAddPost";



const Home = () => {
    const { data, error } = GetApi();
    const { data: content, loading, error: err } = useSubscribePost();
    const history = useHistory();
    const is_login = sessionStorage.getItem('id');
    if(!is_login){
        history.push("/login");
    }
    if (loading) return <div className="flex h-screen">
        <div className="m-auto">
            <h2>Loading ...</h2>
        </div>
    </div>;
    return (
        <div className="bg-gray-900">
            <div className="flex" >
                <SideNavbar />
                <div className="w-3/5 border border-gray-600 h-full border-t-0">
                    <Header />
                    <FormAddPost />
                    {content?.posting.map((v) => (
                        <CardTimeLine 
                        key={v.id}
                        name={v.user.name}
                        username={v.user.username}
                        photo={v.user.photo}
                        date={v.updated_at}
                        content={v.post} />
                    ))}

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

export default Home;