import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarCharts = () => {
  const data = [
    { name: "Dec 9", Tickets_Created: 1600, TS: 1200 },
    { name: "Dec 10", Tickets_Created: 1600, TS: 1200 },
    { name: "Dec 11", Tickets_Created: 1600, TS: 1200 },
    { name: "Dec 12", Tickets_Created: 1600, TS: 1250 },
    { name: "Dec 13", Tickets_Created: 1600, TS: 1200 },
    { name: "Dec 14", Tickets_Created: 1600, TS: 1200 },
    { name: "Dec 15", Tickets_Created: 1600, TS: 1200 },
  ];

  const ticks = [0, 500, 1000, 1500, 2000];
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const markets = ["Export", "Import"];

  return (
    <div className="h-[400px] w-full border-2 rounded-xl p-4">
      <div className="flex items-center justify-between px-7 my-2">
        <h1 className="ml-3 text-DarkTxtColor font-medium text-[18px]">
          Average Tickets Created
        </h1>
        <div className="flex items-center gap-2">
          <p className="flex items-center text-LightTxtColor text-[13px] font-normal">
            <GoDotFill className="text-[#B8CEF7]" />
            Tickets Created
          </p>
          <p className="flex items-center text-LightTxtColor text-[13px] font-normal">
            <GoDotFill className="text-[#6495ED]" />
            Tickets Solved
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <select
              id="days"
              className="p-2 border border-gray-300 rounded-md focus:outline-none"
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
          <div className="flex flex-col items-center">
            <select
              id="markets"
              className="p-2 border bg-blue-400 text-white border-gray-300 rounded-md focus:outline-none"
              value={selectedDay}
              onChange={handleDayChange}
            >
              {markets.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid vertical={false} strokeWidth={2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickMargin={0} // Adjusts space between ticks and axis line
            padding={{ left: 0, right: 0 }} // Removes padding on the left
          />
          <YAxis
            ticks={ticks}
            domain={[0, 2000]}
            axisLine={false}
            tickFormatter={(value) => value}
            tick={{ dx: -10 }} // Adjusts space between ticks and X-axis
          />
          {/* <Tooltip /> */}
          <Bar
            dataKey="Tickets_Created"
            fill="#B8CEF7"
            radius={[10, 0, 1, 10]}
            barSize={15} // Adjusted bar size
            padding={{ left: 10, right: 10 }} // Adjusts padding between bars
            margin={{ left: 0, right: 0 }}
          />
          <Bar
            dataKey="TS"
            fill="#6495ED"
            radius={[0, 1, 10, 0]}
            barSize={15} // Adjusted bar size
            padding={{ left: 10, right: 10 }} // Adjusts padding between bars
            margin={{ left: 0, right: 0 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
