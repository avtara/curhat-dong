import moment from "moment";
import { NavLink } from "react-router-dom";

const CardTimeLine = (props) => {
  const { name, username, date, content, photo } = props;
  return (
    <div>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <NavLink to="/" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img className="inline-block h-10 w-10 rounded-full" src={photo} alt="foto profil" />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {name}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {'\u00A0'}• @{username} • {moment(date, ["YYYY", moment.ISO_8601]).startOf('day').fromNow()}
                </span>
              </p>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          {content}
        </p>
        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <NavLink to="" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                  <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </div>
  )
}

export default CardTimeLine;