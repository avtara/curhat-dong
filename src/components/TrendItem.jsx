import { Link } from "react-router-dom";
import moment from 'moment';

const TrendItem = (prosp) => {
    const { photo, title, desc, date, url } = prosp;
    return (
        <>
            <div className="flex">
                <Link to={{ pathname: url }} target="_blank">
                    <div className="flex-1">
                        <figure className="p-3">
                            <img src={photo} alt="berita" className="rounded-lg shadow-lg" />
                        </figure>
                        <p className="px-4 ml-2 mt-3 w-full text-xs text-gray-400">{moment(date, ["YYYY", moment.ISO_8601]).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <h2 className="px-4 ml-2 w-full font-bold text-white">{title}</h2>
                        <p className="px-4 ml-2 mt-1 mb-3 w-full text-xs text-gray-400">{desc}</p>
                    </div>
                </Link>
            </div>
            <hr className="border-gray-600" />
        </>
    )
}

export default TrendItem;