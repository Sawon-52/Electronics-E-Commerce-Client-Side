import { Outlet } from "react-router-dom";
import AdminNavber from "../../../Components/Admin/AdminNavber/AdminNavber";
import AdminSidebar from "../../../Components/Admin/AdminSidebar/AdminSidebar";

const Dashboard = () => {
  return (
    <div className=" md:w-[90%] lg:w-[80%] mx-auto">
      <div className="mt-4">
        <AdminNavber></AdminNavber>
        <hr className="mt-3" />
      </div>
      <div className="flex  flex-col md:flex-row gap-10">
        <aside>
          <AdminSidebar></AdminSidebar>
        </aside>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
