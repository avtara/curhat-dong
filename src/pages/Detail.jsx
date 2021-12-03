// import { NavLink } from "react-router-dom";

import { useQuery, useSubscription } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import CardTimeLine from "../components/CardTimeLine";
import Footer from "../components/Footer";
import FormAddComment from "../components/FormAddComment";
// import FormInput from "../components/FormInput";
import Header from "../components/Header";
import Search from "../components/Search";
import SideNavbar from "../components/SideNavBar";
import TrendCards from "../components/TrendCards";
import { DETAIL_POST } from "../graphql/query";
import { GETComment } from "../graphql/subs";
import { GetApi } from "../libs/api";

const Detail = () => {
    const { data, error } = GetApi();
    let { id } = useParams();
    const history = useHistory();
    const is_login = sessionStorage.getItem('id');
    if (!is_login) {
        history.push("/login");
    }

    const { loading, error: err, data:dat } = useQuery(DETAIL_POST, {variables: {
        id_post: id
    }});
    const { data: comment} = useSubscription(GETComment, {variables: {
        id_post: id
    }});
    console.log(comment)
    if (!loading && (dat.posting.length === 0 || err)) {
        history.push("/");
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

                    {dat?.posting.map((v) => (
                        <CardTimeLine 
                        key={v.id}
                        name={v.user.name}
                        username={v.user.username}
                        photo={v.user.photo}
                        date={v.updated_at}
                        content={v.post} />
                    ))}
                    <FormAddComment id={id}/>
                    {comment?.comment.map((v) => (
                        <CardTimeLine 
                        key={v.id}
                        name={v.user.name}
                        username={v.user.username}
                        photo={v.user.photo}
                        date={v.created_at}
                        content={v.comment}
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

export default Detail;