// pages/SearchPage.js
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const SearchPage = ({ closeSearch }) => {
  const dataDetails = [
    {
      person: "Alex James",
      issue: "I want to return a aproduct",
      time: "5s ago",
      status: "Open",
    },
    {
      person: "Cheyenne Rosser",
      issue: "Black friday set incomplete",
      time: "1hr ago",
      status: "Open",
    },
    {
      person: "Emery Curtis ",
      issue: "Wrong address registered for delivery",
      time: "4hrs ago",
      status: "Closed",
    },
    {
      person: "Desirae Botosh",
      issue: "The product I want to order is out of stock",
      time: "8hrs ago",
      status: "Open",
    },
    {
      person: "Alex James",
      issue: "I want to return a aproduct",
      time: "5s ago",
      status: "Closed",
    },
  ];
  return (
    <>
      <div>
        <div className=" flex items-center justify-between gap-4">
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
          <div>
            <button className=" bg-[#6495ED] text-white px-6 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
        {/* <div className=" flex justify-between items-center">
          <div className=" flex justify-between items-center gap-20">
            <h3>Alex James</h3>
            <p>I want to return a aproduct</p>
          </div>
          <div className=" flex justify-between items-center gap-20">
            <p>5s ago</p>
            <p>Open</p>
          </div>
        </div> */}
        <table className=" min-w-full">
          {/* <tbody>
            <tr className="hover:bg-gray-50">
              <td className=" ">Alex James</td>
              <td className="">I want to return a aproduct</td>
              <td className="">5s ago</td>
              <td className="">Open</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className=" ">Cheyenne Rose</td>
              <td className="">The product I want to order is out of stock</td>
              <td className="">8h ago</td>
              <td className="">Closed</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className=" ">Emery Curtis</td>
              <td className="">Wrong address registered for delivery</td>
              <td className="">4h ago</td>
              <td className="">Closed</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className=" ">Cheyenne Rose</td>
              <td className="">The product I want to order is out of stock</td>
              <td className="">8h ago</td>
              <td className="">Closed</td>
            </tr>
          </tbody> */}
          <p className=" font-normal text-[13px] text-LightTxtColor my-2">
            Today
          </p>
          <tbody>
            {dataDetails.map((dataDetail, index) => (
              <tr key={index} className="p-2 m-4">
                <td className=" text-DarkTxtColor text-[16px] font-normal py-1">
                  {dataDetail.person}
                </td>
                <td className=" text-LightTxtColor text-[16px] font-normal">
                  {dataDetail.issue}
                </td>
                <td className="text-LightTxtColor text-[13px] font-normal">
                  {dataDetail.time}
                </td>
                <td className="text-DarkTxtColor text-[13px] font-medium">
                  <span
                    className={`flex items-center rounded-full px-2 py-1 justify-center w-fit text-xs ${
                      dataDetail.status === "Open"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    <GoDotFill
                      className={` text-[15px] ${
                        dataDetail.status === "Open"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    {dataDetail.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className=" min-w-full">
          <p className=" font-normal text-[13px] text-LightTxtColor my-2">
            Today
          </p>
          <tbody>
            {dataDetails.map((dataDetail, index) => (
              <tr key={index} className="p-2 m-4">
                <td className=" text-DarkTxtColor text-[16px] font-normal py-1">
                  {dataDetail.person}
                </td>
                <td className=" text-LightTxtColor text-[16px] font-normal">
                  {dataDetail.issue}
                </td>
                <td className="text-LightTxtColor text-[13px] font-normal">
                  {dataDetail.time}
                </td>
                <td className="text-DarkTxtColor text-[13px] font-medium">
                  <span
                    className={`flex items-center rounded-full px-2 py-1 justify-center w-fit text-xs ${
                      dataDetail.status === "Open"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    <GoDotFill
                      className={` text-[15px] ${
                        dataDetail.status === "Open"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    {dataDetail.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchPage;
