import { Outlet } from "react-router-dom";
import AdminNavber from "../../../Components/Admin/AdminNavber/AdminNavber";
import AdminSidebar from "../../../Components/Admin/AdminSidebar/AdminSidebar";

const Dashboard = () => {
  return (
    <div className=" md:w-[90%] lg:w-[80%] mx-auto h-screen">
      <div className="flex  flex-col-reverse md:flex-row justify-between gap-10 md:gap-1">
        <aside className="">
          <AdminSidebar></AdminSidebar>
        </aside>

        <div className="w-full h-full">
          <div className="mt-4">
            <AdminNavber></AdminNavber>
            <hr className="my-4" />
          </div>

          <div className="w-full h-[calc(100vh-95px)] bg-indigo-50 overflow-y-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
