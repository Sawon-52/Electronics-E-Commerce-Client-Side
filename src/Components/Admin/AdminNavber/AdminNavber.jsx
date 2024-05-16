import { IoIosSearch } from "react-icons/io";
import { MdNightlightRound } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";

const AdminNavber = () => {
  const [theme, setTheme] = useState(true);
  const [showProfile, setShowProfile] = useState(true);
  const handleThemeButton = () => {
    setTheme(!theme);
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <nav className="flex items-center justify-between gap-10 py-2">
        <div className="text-3xl font-bold ">
          <h2>Admin.</h2>
        </div>
        <div className="flex items-center lg:w-[400px]">
          <input type="text" placeholder="Search here...." className=" outline-none border-2 border-violet-500 p-2  px-4 w-full rounded-xl" />

          <div className="relative right-8 text-xl">
            <IoIosSearch />
          </div>
        </div>

        <div className="flex gap-8 items-center ">
          <div onClick={handleThemeButton} className="flex justify-center items-center bg-gray-200 rounded-full w-10 h-10 p-1 text-2xl">
            {theme ? <MdNightlightRound /> : <CiLight />}
          </div>
          <div className=" relative flex justify-center items-center bg-gray-200 rounded-full w-10 h-10 p-1 text-2xl">
            <IoIosNotificationsOutline />
            <div className="absolute flex justify-center items-center bg-red-400 rounded-full w-5 h-5 text-sm -right-1 -top-1 font-bold text-white">3</div>
          </div>
          <div className=" relative flex justify-center items-center bg-gray-200 rounded-full w-10 h-10 p-1 text-2xl">
            <FiMessageSquare />
            <div className="absolute flex justify-center items-center bg-blue-400 rounded-full w-5 h-5 text-sm -right-1 -top-1 font-bold text-white">3</div>
          </div>

          {/* admin profile element */}
          <div className=" relative ">
            <div onClick={handleProfile} className="flex gap-3 items-center">
              <div className="text-2xl bg-gray-200 p-4 rounded-full">
                {/* <img src="" alt="" /> */}
                <FaRegUser />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mehedi hasan</h2>
                <h3 className="text-md font-normal text-gray-500">Admin</h3>
              </div>
            </div>

            <div className={`absolute w-[250px] min-h-[200px] bg-gray-200 top-[70px] rounded-lg flex flex-col items-center text-xl gap-10 p-4 ${showProfile ? "hidden " : "block "}`}>
              <Link>Account</Link>
              <Link>Setings</Link>
              <Link>Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavber;
