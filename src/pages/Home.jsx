import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";
import { GetApi } from "../libs/api";
import { useHistory, useLocation } from "react-router-dom";
import FormAddPost from "../components/FormAddPost";
import { GETDataPost } from "../graphql/subs";
import { useSubscription } from "@apollo/client";
import React from "react";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
    const { data, error } = GetApi();
    let query = useQuery();
    console.log(query.get("keyword"))
    const { data:content, loading } = useSubscription(GETDataPost,{variables: {
        keyword: query.get("keyword") ? query.get("keyword") : ""
    }});
    console.log(content)
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
                        content={v.post}
                        id={v.id} />
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