"use client";
import React, { useState } from "react";

const UserTable = () => {
  const headers = ["Sr#", "Users", "Type", "Status", "Action"];
  const data = [
    {
      sr: 1,
      user: "Baghera Jones",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      gmail: "baghera.jones@gmail.com",
      type: "Commentator",
      status: "Active",
    },
    {
      sr: 2,
      user: "Doigby",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      gmail: "doigby.new@gmail.com",
      type: "User",
      status: "Offline",
    },
    {
      sr: 3,
      user: "Doigby",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      gmail: "doigby.new@gmail.com",
      type: "User",
      status: "Inactive",
    },
    {
      sr: 4,
      user: "Doigby",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      gmail: "doigby.new@gmail.com",
      type: "User",
      status: "Live",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  };
  return (
    <div className="">
      <div className="rounded-lg border overflow-x-auto">
        <table className="min-w-full leading-normal ">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-5 py-4 bg-[#11151e]   text-gray-500 text-left text-sm  font-normal"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#090a0d] ">
            {data?.length &&
              data?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="px-5 py-4   text-sm">
                    <p className=" whitespace-no-wrap">{row?.sr}</p>
                  </td>
                  <td className="px-5 py-4   overflow-hidden text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="h-full w-full rounded-full "
                          src={row?.profileImg}
                          alt={row?.user}
                        />
                      </div>
                      <p className=" flex flex-col whitespace-no-wrap">
                        {row?.user}
                        <span className="text-[10px] text-gray-400">
                          {row?.gmail}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4   text-xs">
                    <span
                      className={`whitespace-no-wrap py-[7px] px-3 rounded-full ${
                        row?.type === "Commentator"
                          ? " bg-[#11151e] "
                          : "bg-gray-800"
                      } `}
                    >
                      {row?.type}
                    </span>
                  </td>
                  <td className="px-5 py-4   text-sm">
                    <span
                      className={`relative inline-block px-3 py-1  ${
                        row?.status.toLowerCase() === "active"
                          ? "text-green-500"
                          : row?.status.toLowerCase() === "offline"
                          ? "text-gray-500"
                          : row?.status.toLowerCase() === "inactive"
                          ? "text-[#a57804]"
                          : "text-red-700"
                      }`}
                    >
                      {row?.status}
                    </span>
                  </td>
                  <td className="px-5 py-4    text-sm ">
                    <div className="flex items-center md:gap-5 gap-2">
                      <button className="text-[#021ae0]  p-2">
                        User Block
                      </button>
                      {row?.type !== "User" ? (
                        <button className="text-[#021ae0] p-2">
                          Stream Block
                        </button>
                      ) : (
                        <p className="mx-5 text-gray-600 whitespace-no-wrap flex">
                          ----
                        </p>
                      )}
                      <button className="text-[#021ae0] p-2">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-3 justify-between  mt-4">
        <div className="flex gap-2">
          <button onClick={handlePrevPage} className="text-gray-500 text-sm   ">
            Pre
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={` h-8 w-8 rounded-full text-xs  ${
                currentPage === index + 1
                  ? "bg-[#011bff] text-white"
                  : " text-gray-300"
              } border`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} className="text-sm text-gray-500">
            Next
          </button>
        </div>
        <div className="text-sm text-gray-700">
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, data.length)} of {data.length}{" "}
          entries
        </div>
      </div>
    </div>
  );
};

export default UserTable;
