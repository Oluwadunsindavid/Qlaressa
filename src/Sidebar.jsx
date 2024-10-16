import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  FaInbox,
  FaSearch,
  FaTicketAlt,
  FaComments,
  FaUserFriends,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import img from "./assets/rachael.png";

const Sidebar = ({ openSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const sidebarRef = useRef(null);
  const location = useLocation(); // Get the current URL path

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  // Function to add active styles if the current path matches
  const isActive = (path) => {
    return location.pathname === path
      ? "bg-blue-500 text-white p-2 rounded-md"
      : "text-gray-700";
  };

  return (
    // to fix the sidebar on a spot
    <div className="flex fixed h-full z-[9999]">
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static transition-transform duration-200 ease-in-out bg-gray-100 w-64 p-5 space-y-5 text-gray-900`}
      >
        <div className=" flex items-center space-x-3 mb-5">
          <img src={img} alt="User" className="rounded-full w-10 h-10" />
          <span className="font-medium flex items-center gap-2">
            Racheal Duel <IoIosArrowDown />
          </span>
        </div>

        <div className="space-y-2">
          <Link
            to="/inbox"
            className={`flex items-center space-x-2 ${isActive("/inbox")}`}
            onClick={handleLinkClick}
          >
            <FaInbox /> <span>Inbox</span>
          </Link>

          <button
            onClick={openSearch} // Call openSearch function to trigger the search pop-up
            className="w-full text-left flex items-center space-x-2 text-gray-700 focus:outline-none"
          >
            <FaSearch /> <span>Search</span>
          </button>

          <Link
            to="/"
            className={`flex items-center space-x-2 ${isActive("/dashboard")}`}
            onClick={handleLinkClick}
          >
            <FaInbox /> <span>Dashboard</span>
          </Link>

          {/* Tickets Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown(1)}
              className="w-full text-left focus:outline-none flex justify-between items-center"
            >
              <div
                className={`flex items-center space-x-2 ${
                  isActive("/active-tickets") ||
                  isActive("/closed-tickets") ||
                  isActive("/escalated")
                }`}
              >
                <FaTicketAlt /> <span>Tickets</span>
              </div>
              <span>
                {dropdownOpen === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {dropdownOpen === 1 && (
              <div className="ml-6 mt-2 space-y-2">
                <Link
                  to="/active-tickets"
                  className={`block ${isActive("/active-tickets")}`}
                  onClick={handleLinkClick}
                >
                  Active Tickets
                </Link>
                <Link
                  to="/closed-tickets"
                  className={`block ${isActive("/closed-tickets")}`}
                  onClick={handleLinkClick}
                >
                  Closed Tickets
                </Link>
                <Link
                  to="/escalated"
                  className={`block ${isActive("/escalated")}`}
                  onClick={handleLinkClick}
                >
                  Escalated
                </Link>
              </div>
            )}
          </div>

          {/* Chats Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown(2)}
              className="w-full text-left focus:outline-none flex justify-between items-center"
            >
              <div
                className={`flex items-center space-x-2 ${
                  isActive("/chatbot") ||
                  isActive("/email") ||
                  isActive("/whatsapp")
                }`}
              >
                <FaComments /> <span>Chats</span>
              </div>
              <span>
                {dropdownOpen === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {dropdownOpen === 2 && (
              <div className="ml-6 mt-2 space-y-2">
                <Link
                  to="/chatbot"
                  className={`block ${isActive("/chatbot")}`}
                  onClick={handleLinkClick}
                >
                  Chatbot
                </Link>
                <Link
                  to="/email"
                  className={`block ${isActive("/email")}`}
                  onClick={handleLinkClick}
                >
                  Email
                </Link>
                <Link
                  to="/whatsapp"
                  className={`block ${isActive("/whatsapp")}`}
                  onClick={handleLinkClick}
                >
                  WhatsApp
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/customers"
            className={`flex items-center space-x-2 ${isActive("/customers")}`}
            onClick={handleLinkClick}
          >
            <FaUserFriends /> <span>Customers</span>
          </Link>
        </div>

        {/* pt-48 to move the support, logout and logo section to the down part of the page */}
        <div className="mt-2 pt-48 space-y-2 ">
          <Link
            to="/support"
            className={`flex items-center space-x-2 ${isActive("/support")}`}
          >
            <FaQuestionCircle /> <span>Support</span>
          </Link>

          <Link
            to="/logout"
            className="flex items-center space-x-2 text-gray-700"
          >
            <FaSignOutAlt /> <span>Logout</span>
          </Link>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <p className="text-[14px] font-normal text-[#989EB3]">
            Powered by <br />
            <span className="text-blue-600 text-[24px] font-bold">
              Qlaressa
            </span>
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-4 bg-blue-600"
        >
          <IoMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
