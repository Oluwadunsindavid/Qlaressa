import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";

const PieCharts = () => {
  const dataa = [
    { id: 0, name: "Email", value: 100, others: "sdf" },
    { id: 1, name: "Chat Bot", value: 100, others: "sdf" },
    { id: 2, name: "WhatsApp", value: 100, others: "sdf" },
  ];

  const COLORS = ["#97B8F3", "#B8CEF7", "#CFDEF9"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
    <div className="h-[400px] w-full border-2 rounded-xl p-4">
      <h2 className="text-center  text-DarkTxtColor font-medium text-[18px]">
        Tickets Channels
      </h2>
      <div className="flex gap-4 mx-auto items-center justify-center py-2">
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
      </div>
      <ResponsiveContainer width="100%" height=" 50%">
        <PieChart width={400} height={400}>
          <Pie
            data={dataa}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {dataa.map((entry, id) => (
              <Cell key={`cell-${id}`} fill={COLORS[id % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className=" flex items-center justify-center">
        <div className=" flex flex-col items-start justify-center">
          {dataa.map(({ id, name, value }) => (
            <div key={id} className=" flex items-start justify-center ">
              <div className=" flex items-center justify-center my-2">
                <GoDotFill
                  style={{
                    color: COLORS[id],
                  }}
                />{" "}
                <p className=" text-LightTxtColor">
                  {value}% {name}
                </p>
                {/* key={`cell-${id}`} */}
              </div>
            </div>
          ))}

          {/* 
                {dataa.map((data) => (
          <div key={data.id}>
            {console.log(data.others)} 
            <p>{data.name}</p>
            <h1>{data.value}</h1> 
            <div className=" flex items-center mx-auto justify-center m-2">
              <GoDotFill className="text-[#97B8F3]" /> <p>{name}</p>
            </div>
          </div>
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
