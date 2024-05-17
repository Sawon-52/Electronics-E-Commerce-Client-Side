import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { TbUsersPlus } from "react-icons/tb";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const AdminSidebar = () => {
  const links = (
    <>
      <NavLink to="admin/dashboard" className={({ isActive, isPending }) => (isActive ? "text-white bg-indigo-400 p-2  text-lg  font-regular flex items-center gap-4" : isPending ? "" : "text-lg text-white font-regular flex items-center gap-4")}>
        <MdDashboard />
        Dashboard
      </NavLink>
      <NavLink to="admin/user" className={({ isActive, isPending }) => (isActive ? "text-white text-lg  font-regular   bg-indigo-400 p-2  flex items-center gap-4" : isPending ? "" : "text-lg text-white font-regular flex items-center gap-4")}>
        <TbUsersPlus />
        Users
      </NavLink>
      <NavLink to="admin/order" className={({ isActive, isPending }) => (isActive ? "text-white text-lg  font-regular bg-indigo-400 p-2 flex items-center gap-4 " : isPending ? "" : "text-lg text-white font-regular flex items-center gap-4")}>
        <AiOutlineFileAdd />
        Orders
      </NavLink>
      <NavLink to="admin/product" className={({ isActive, isPending }) => (isActive ? "text-white text-lg  font-regular bg-indigo-400 p-2  flex items-center gap-4" : isPending ? "" : "text-lg text-white font-regular flex items-center gap-4")}>
        <AiOutlineProduct />
        Products
      </NavLink>
      <NavLink to="admin/addproduct" className={({ isActive, isPending }) => (isActive ? "text-white text-lg  font-regular bg-indigo-400 p-2  flex items-center gap-4" : isPending ? "" : "text-lg text-white font-regular flex items-center p-2 gap-4")}>
        <IoIosAddCircleOutline />
        Add Product
      </NavLink>
    </>
  );

  return (
    <div className="w-full md:w-64  min-h-screen bg-indigo-500 p-4 flex flex-col justify-between">
      <div>
        <div className="text-3xl font-bold text-white">
          <h2>Admin.</h2>
        </div>
        <ul className="flex flex-col gap-10 my-10 ">{links}</ul>
      </div>

      <div className="flex h-full">
        <button className="text-white  p-2  text-lg mt-40  font-regular flex items-center  gap-4 rounded-lg ">
          <CiLogout />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
