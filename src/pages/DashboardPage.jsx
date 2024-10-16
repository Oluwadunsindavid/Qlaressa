import React from "react";
import Hero from "../components/DashboardComp/Hero";
import RecentTickets from "../components/DashboardComp/RecentTickets";
import Table from "../components/DashboardComp/Table";
import BarChart from "../components/DashboardComp/BarChart";
import TableSample from "../components/DashboardComp/TableSample";
import BarChartTwo from "../components/DashboardComp/BarChartTwo";
import PieChart from "../components/DashboardComp/PieChart";
import Dashboard from "../components/DashboardComp/Dashboard";

const DashboardPage = () => {
  return (
    <div>
      {/* <Dashboard/> */}
      <Hero />
      <RecentTickets />
      <Table />
      {/* <TableSample /> */}
      <div className=" flex items-center gap-4">
        <div className=" basis-[80%]">
          <BarChart />
        </div>
        <div className=" basis-[20%]">
          <PieChart />
        </div>
      </div>
      {/* <BarChartTwo/> */}
      {/* <TableSample />  */}
      {/* <TableSample /> */}
    </div>
  );
};

export default DashboardPage;
