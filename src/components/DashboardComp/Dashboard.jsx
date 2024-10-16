import React from "react";

const Table = () => {
  const rowData = {
    name: "Alex James",
    subject: "I want to return the product",
    type: "Return product",
    id: "#113-5671",
    status: "Open",
    lastActive: "Today",
  };

  return (
    <div className="container mx-auto p-4 ">
      <table className="min-w-full bg-white border-2 rounded-3xl">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 border-r border-gray-200">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
            </th>
            <th className="text-left py-3 px-4 border-r border-gray-200 text-gray-500">
              Name <span className="inline-block ml-2">▲</span>
            </th>
            <th className="text-left py-3 px-4 border-r border-gray-200 text-gray-500">
              Subject <span className="inline-block ml-2">▲</span>
            </th>
            <th className="text-left py-3 px-4 border-r border-gray-200 text-gray-500">
              Type <span className="inline-block ml-2">▲</span>
            </th>
            <th className="text-left py-3 px-4 border-r border-gray-200 text-gray-500">
              ID <span className="inline-block ml-2">▲</span>
            </th>
            <th className="text-left py-3 px-4 border-r border-gray-200 text-gray-500">
              Status <span className="inline-block ml-2">▲</span>
            </th>
            <th className="text-left py-3 px-4 bordr-r border-gray-200 text-gray-500">
              Last active <span className="inline-block ml-2">▲</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 border-r border-gray-200">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-gray-500">
              {rowData.name}
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-gray-500 truncate">
              {rowData.subject}
            </td>
            <td className="py-3 px-4 border-r border-gray-200">
              <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs">
                {rowData.type}
              </span>
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-gray-500">
              {rowData.id}
            </td>
            <td className="py-3 px-4 border-r border-gray-200">
              <span className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                {rowData.status}
              </span>
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-gray-500">
              {rowData.lastActive}
            </td>
            <td className="py-3 px-4">
              {/* Star icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.067 6.368a1 1 0 00.95.69h6.684c.969 0 1.371 1.24.588 1.81l-5.404 3.918a1 1 0 00-.364 1.118l2.067 6.368c.3.921-.755 1.688-1.538 1.118l-5.404-3.918a1 1 0 00-1.176 0l-5.404 3.918c-.783.57-1.838-.197-1.538-1.118l2.067-6.368a1 1 0 00-.364-1.118L2.414 11.795c-.783-.57-.381-1.81.588-1.81h6.684a1 1 0 00.95-.69l2.067-6.368z"
                />
              </svg>
            </td>
            <td className="py-3 px-4">
              {/* 3 dots icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v.01M12 12v.01M12 15v.01M12 3.9A8.1 8.1 0 103.9 12 8.1 8.1 0 0012 3.9z"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
