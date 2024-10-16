import React from "react";
import Hero from "../components/ActiveTicketComp/Hero";
import Table from "../components/ActiveTicketComp/Table";
import BarChart from "../components/DashboardComp/BarChart";
import PieChart from "../components/DashboardComp/PieChart";

const ActiveTicket = () => {
  return (
    <div>
      <Hero />
      <Table />
      <div className=" flex items-center gap-4">
        <div className=" basis-[80%]">
          <BarChart />
        </div>
        <div className=" basis-[20%]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default ActiveTicket;
