// pages/InboxPage.js
import React from "react";

const InboxPage = ({ closeInbox }) => {
  const messages = [
    { name: "Alex James", status: "Ticket updated", time: "2:46 PM" },
    { name: "Emery Curtis", status: "Ticket Closed", time: "12:01 PM" },
    { name: "Cheyenne Rosser", status: "Ticket Closed", time: "11:33 AM" },
    { name: "Cheyenne Rosser", status: "Ticket Created", time: "11:12 AM" },
    { name: "Emery Curtis", status: "Ticket Created", time: "11:10 AM" },
    { name: "Alex James", status: "Ticket Created", time: "11:00 AM" },
    // Add more items based on the image structure
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <button
          onClick={closeInbox}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Close
        </button>
      </div>

      <ul className="space-y-4">
        {messages.map((message, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={`https://via.placeholder.com/40`}
                alt={message.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{message.name}</p>
                <p className="text-xs text-gray-500">{message.status}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{message.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxPage;
