import { IoIosSearch } from "react-icons/io";
import { MdNightlightRound } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const AdminNavber = () => {
  const [theme, setTheme] = useState(true);
  const [showProfile, setShowProfile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const handleThemeButton = () => {
    setTheme(!theme);
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="flex items-center justify-between gap-10 py-2 p-4 md:p-0 ">
        <div className="flex items-center lg:w-[400px]">
          <input type="text" placeholder="Search here...." className=" outline-none border-2 border-indigo-100 p-2  px-4 w-full rounded-xl" />

          <div className="relative right-8 text-xl">
            <IoIosSearch />
          </div>
        </div>

        <div className={` absolute md:static p-10 md:p-0 transition-all ease-in duration-500 ${showMenu ? "w-full md:w-max  h-full md:h-min left-0 top-[70px] md:top-0 bg-indigo-500 " : "top-[-500px] left-0 w-full md:w-max  h-full md:h-min"}`}>
          <div className="flex  flex-col md:flex-row gap-10 items-center cursor-pointer ">
            <div className="flex  gap-8 items-center cursor-pointer ">
              <div onClick={handleThemeButton} className="flex justify-center items-center bg-indigo-100 rounded-full w-10 h-10 p-1 text-2xl">
                {theme ? <MdNightlightRound /> : <CiLight />}
              </div>
              <div className=" relative flex justify-center items-center bg-indigo-100 rounded-full w-10 h-10 p-1 text-2xl">
                <IoIosNotificationsOutline />
                <div className="absolute flex justify-center items-center bg-red-400 rounded-full w-5 h-5 text-sm -right-1 -top-1 font-bold text-white">3</div>
              </div>
              <div className=" relative flex justify-center items-center bg-indigo-100 rounded-full w-10 h-10 p-1 text-2xl">
                <FiMessageSquare />
                <div className="absolute flex justify-center items-center bg-blue-400 rounded-full w-5 h-5 text-sm -right-1 -top-1 font-bold text-white">3</div>
              </div>
            </div>

            {/* admin profile element */}
            <div className=" relative cursor-pointer">
              <div onClick={handleProfile} className="flex gap-3 items-center">
                <div className="text-2xl bg-gray-200 p-3 rounded-full">
                  {/* <img src="" alt="" /> */}
                  <FaRegUser />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Mehedi hasan</h2>
                  <h3 className="text-sm font-normal text-gray-800">Admin</h3>
                </div>
              </div>

              <div className={`absolute w-[150px] min-h-[150px] bg-indigo-50  rounded-lg flex flex-col items-center text-base gap-5 p-4 transition-all ease-in duration-500 ${showProfile ? "top-[-490px] right-0" : "top-[70px] right-0"}`}>
                <Link className="flex gap-2 items-center">
                  {" "}
                  <MdOutlineAccountCircle />
                  Account
                </Link>
                <Link className="flex gap-2 items-center">
                  <CiSettings />
                  Setings
                </Link>
                <Link className="flex gap-2 items-center text-red-500 ">
                  <CiLogout></CiLogout>Logout
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div onClick={handleShowMenu} className="text-3xl font-bold block md:hidden">
          {showMenu ? <RxCross1 /> : <CiMenuFries />}
        </div>
      </nav>
    </div>
  );
};

export default AdminNavber;
