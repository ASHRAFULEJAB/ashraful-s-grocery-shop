import React from "react";
import { Outlet } from "react-router-dom";
import LeftNavDashboard from "../component/LeftNavDashboard";
import Header from "../shared/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex">
        {" "}
        <aside>
          <LeftNavDashboard></LeftNavDashboard>
        </aside>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
