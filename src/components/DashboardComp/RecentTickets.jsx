import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const RecentTickets = () => {
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
  return (
    <div>
      <p className=" font-medium text-[18px] mt-6">Recent Tickets</p>
      <div className=" flex items-center gap-4">
        <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="w-4 h-4" />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="py-2 pl-10 pr-4 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <select
            id="days"
            className="p-2 border border-gray-300 rounded-md focus:outline-none "
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
    </div>
  );
};

export default RecentTickets;
