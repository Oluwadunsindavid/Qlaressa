// Table.js
import React, { useState } from "react";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlStar } from "react-icons/sl";
import { PiDotsThreeOutline } from "react-icons/pi";
import { SiStarz } from "react-icons/si";

const Table = () => {
  // Sample data
  const [tickets] = useState([
    {
      name: "Alex James",
      subject: "I want to return the product...",
      type: "Return product",
      id: "#113-5671",
      status: "Open",
      lastActive: "Today",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Cheyenne Rosser",
      subject: "Black friday set incomplete...",
      type: "Missing product",
      id: "#233-5785",
      status: "Closed",
      lastActive: "Today",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Emery Curtis",
      subject: "Wrong address registered...",
      type: "Product delivery",
      id: "#823-5567",
      status: "Open",
      lastActive: "Yesterday",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Desirae Botosh",
      subject: "The product I want to...",
      type: "New product",
      id: "#423-5674",
      status: "Closed",
      lastActive: "Yesterday",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Abram Passaquindici Arcand",
      subject: "Ordered gadget did not...",
      type: "Product return",
      id: "#313-5378",
      status: "Closed",
      lastActive: "Yesterday",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Rayna Kenter",
      subject: "How long does it take to...",
      type: "Product delivery",
      id: "#443-5489",
      status: "Closed",
      lastActive: "Yesterday",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
    {
      name: "Skylar Geidt",
      subject: "Return product",
      type: "Wrong product",
      id: "#613-5672",
      status: "Open",
      lastActive: "2 days ago",
      stars: <SlStar />,
      dots: <PiDotsThreeOutline />,
    },
  ]);

  return (
    <div className="container mx-auto py-4">
      <div className="overflow-x-auto rounded-2xl border-2">
        <table className="min-w-full bg-white boder bordr-gray-300  ">
          <thead className=" bg-rd-500">
            <th className="p-4 border-b-2 border-r text-LightTxtColor font-medium text-[16px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md mx-2"
                />
                Name
                <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 border-r text-LightTxtColor font-medium text-[16px]">
              <div className=" flex items-center gap-2">
                Subject <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 border-r text-LightTxtColor font-medium text-[16px]">
              <div className=" flex items-center gap-2">
                Type <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 border-r text-LightTxtColor font-medium text-[16px]">
              <div className="flex items-center gap-2">
                ID <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 border-r text-LightTxtColor font-medium text-[16px]">
              <div className=" flex items-center gap-2">
                Status <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 text-LightTxtColor font-medium text-[16px]">
              <div className="flex items-center gap-2">
                Last Active <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div>
            </th>
            <th className="p-4 border-b-2 text-LightTxtColor font-medium text-[16px]">
              {/* <div className="flex items-center gap-2">
                Last <TbCaretUpDownFilled className="text-[#989EB3]" />
              </div> */}
            </th>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <td className="p-4 border-b border-r">
                  <div className=" flex items-center text-DarkTxtColor">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md mx-2"
                    />
                    {ticket.name}
                  </div>
                </td>
                <td className="p-4 border-b border-r text-DarkTxtColor">
                  {ticket.subject}
                </td>
                <td className="p-4 border-b border-r">
                  <span className="bg-[#E8E9EE] text-DarkTxtColor px-2 py-1 rounded-md text-xs">
                    {ticket.type}
                  </span>
                </td>
                <td className="p-4 border-b border-r text-DarkTxtColor">
                  {ticket.id}
                </td>
                <td className="p-4 border-b border-r">
                  <span
                    className={`px-2 py-1 rounded-full flex items-center justify-center w-fit text-xs ${
                      ticket.status === "Open"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <GoDotFill size={15} />
                    {ticket.status}
                  </span>
                </td>
                <td className="p-4 border-b text-DarkTxtColor border-r">
                  <div className=" flex items-center gap-2">
                    {" "}
                    {ticket.lastActive}
                  </div>{" "}
                </td>
                <td className="p-4 border-b text-DarkTxtColor border-r">
                  <div className=" flex items-center gap-4">
                    {ticket.stars} {ticket.dots}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className=" text-DarkTxtColor text-[13px] font-normal">
          Showing: <span className=" text-LighterTxtColor">7 items</span>
        </div>
        <div className="flex  items-center space-x-2">
          <button className="px-3 py-1 border-[#E0E0E0] border-2 text-LightTxtColor rounded-md">
            First page
          </button>
          <IoIosArrowBack />
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 rounded-md border-[#E0E0E0] border-2 text-LightTxtColor ${
                num === 1 ? " text-gray-700" : "bg-white text-gray-700"
              }`}
            >
              {num}
            </button>
          ))}
          <IoIosArrowForward />
          <button className="px-3 py-1 border-[#E0E0E0] border-2 text-LightTxtColor rounded-md">
            Last page
          </button>
        </div>
        <div className="text-DarkTxtColor text-[13px] font-normal">
          Total: <span className=" text-LighterTxtColor">312 items</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
