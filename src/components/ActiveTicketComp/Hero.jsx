import React, { useState } from "react";
import { FaSearch, FaRegCircle } from "react-icons/fa";
import { CiCreditCard1, CiCalendar, CiStar } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";

const Hero = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // State to hold the selected day
  const [selectedDay, setSelectedDay] = useState("");

  // Function to handle the change in selected day
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const filters = [
    { icon: <CiCreditCard1 />, iconName: "Type" },
    { icon: <FaRegCircle />, iconName: "Status" },
    { icon: <CiCalendar />, iconName: "Activity" },
    { icon: <CiStar />, iconName: "Starred" },
  ];
  return (
    <div>
      <div className=" flex items-center justify-between">
        <div>
          <h2 className=" text-black text-[18px] font-medium">Active Ticket</h2>
        </div>
        <div className=" flex items-center gap-2 text-LighterTxtColor">
          <CgAddR className=" text-[20px]" />
          <h2 className=" text-[16px] font-medium">New Ticket</h2>
        </div>
      </div>
      <div className=" flex items-center gap-4 py-4">
        <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="w-4 h-4 text-LighterTxtColor" />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="py-2 pl-10 pr-4 text-sm text-black rounded-md border border-gray-300 focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <select
            id="days"
            className="p-2 border border-gray-300 text-LightTxtColor rounded-md focus:outline-none "
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="" disabled>
              This week
            </option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className=" bg-[#6495ED] text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <h2 className=" text-[13px] font-medium text-DarkTxtColor mr-2">
          Filter
        </h2>
        {filters.map((filter, index) => (
          <div className=" flex  items-center justify-between w-48  mx-4">
            <div className=" flex items-center gap-2 text-LighterTxtColor">
              <i className=" text-[20px]">{filter.icon}</i>
              <h2>{filter.iconName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
