import AdminNavber from "../../../Components/Admin/AdminNavber/AdminNavber";

const Dashboard = () => {
  return (
    <div className=" md:w-[90%] lg:w-[80%] mx-auto">
      <div>
        <AdminNavber></AdminNavber>
        <hr className="my-3" />
      </div>
    </div>
  );
};

export default Dashboard;
