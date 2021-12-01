import React from "react";
import { Link } from "react-router-dom";
import TrendItem from "./TrendItem";


const TrendCards = (props) => {
    const { data } = props.data;
    return (
        <div className="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg m-4 mr-20">
            <div className="flex">
                <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-xl w-full font-semibold text-white">Trends Indonesia</h2>
                </div>
            </div>
            <hr className="border-gray-600" />
            {
                data.map((mapp) => <TrendItem key={mapp.uuid} photo={mapp.image_url} url={mapp.url} date={mapp.published_at} title={mapp.title} desc={mapp.snippet} />)
            }
            <div className="flex">
                <div className="flex-1 p-4">
                    <Link to={{ pathname: "https://www.bbc.com/indonesia" }} target="_blank"><h2 className="px-4 ml-2 w-full font-bold text-blue-400">Show more</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default TrendCards;