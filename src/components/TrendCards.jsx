import React from "react";
import TrendItem from "./TrendItem";


const TrendCards = (props) => {
    const { data } = props.data;
    console.log(data);
    return (
        <div className="max-w-sm rounded-lg bg-gray-800 overflow-hidden shadow-lg m-4 mr-20">
            <div className="flex">
                <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Trends Indonesia</h2>
                </div>
            </div>
            <hr className="border-gray-600" />
            <TrendItem />
            <TrendItem />
            <div className="flex">
                <div className="flex-1 p-4">
                    <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
                </div>
            </div>
        </div>
    )
}

export default TrendCards;