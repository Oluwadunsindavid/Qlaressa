import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div>
      <div className="flex font-DMSans">
        <Sidebar />
        {/* <Sidebar openSearch={openSearch} /> */}
        {/* Passing openSearch function to Sidebar */}
        {/* ml-64 below shifted the dashboard part to the left */}
        <div className="flex-1 px-8 py-5 ml-64 h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
