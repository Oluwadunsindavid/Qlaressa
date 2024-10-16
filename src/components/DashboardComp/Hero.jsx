import React, { useState } from "react";
import {
  GoArrowDownLeft,
  GoArrowDownRight,
  GoArrowUpRight,
} from "react-icons/go";

const Hero = () => {
  const tickets = [
    {
      label: "Created Tickets",
      value: 10456,
      compareText: "Compared to last month",
      change: "-5%",
      changeType: "down",
      color: "text-[#FF0000]",
    },
    {
      label: "Unsolved Tickets",
      value: 4445,
      compareText: "Compared to last month",
      change: "+10%",
      changeType: "up",
      color: "text-[#379D2F]",
    },
    {
      label: "Solved Tickets",
      value: 14206,
      compareText: "Compared to last month",
      change: "-5%",
      changeType: "down",
      color: "text-[#FF0000]",
    },
    {
      label: "Created Tickets",
      value: "7.7/10",
      compareText: "Compared to last month",
      change: "-5%",
      changeType: "down",
      color: "text-[#FF0000]",
    },
  ];

  const getArrow = (changeType) => {
    return changeType === "up" ? <GoArrowUpRight /> : <GoArrowDownLeft />;
  };

  const getBackgroundColor = (color) => {
    if (color === "text-[#FF0000]") {
      return "bg-[#FFE5E5]";
    } else if (color === "text-[#379D2F]") {
      return "bg-[#E7FFE5]";
    }
    return "";
  };

  return (
    <div>
      <h2 className=" font-normal text-[32px]">Dashboard</h2>
      <div className=" border-2 rounded-3xl p-4 flex justify-between items-center">
        {tickets.map((ticket, index) => (
          <div key={index}>
            <h2 className=" text-[13px] font-medium text-[#474E67]">
              {ticket.label}
            </h2>
            <div className="flex items-baseline space-x-2">
              <p className=" text-[32px] font-medium text-[#101528]">
                {ticket.value.toLocaleString()}
              </p>
            </div>
            <div className=" flex items-center gap-4">
              <p className="text-[13px] font-medium text-[#474E67] flex items-center gap-2">
                {ticket.compareText}
              </p>
              <span
                className={`${
                  ticket.color
                } flex items-center gap-2 rounded font-bold px-2 ${getBackgroundColor(
                  ticket.color
                )}`}
              >
                {ticket.change}
                {ticket.changeType === "up" ? (
                  <GoArrowUpRight />
                ) : (
                  <GoArrowDownLeft />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
