import { Bell } from "lucide-react";
import React, { useState } from "react";

export const Notification = ({
  setIsOpen,
  isNotificationOpen,
  setIsNotification,
}: any) => {
  const toggleDropdown = () => {
    setIsOpen(false);
    setIsNotification(!isNotificationOpen);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          className="flex items-center gap-2"
          type="button"
          //   className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <Bell  />
        </button>

        {isNotificationOpen && (
          <div
            className="origin-top-right absolute bg-[#001BFF] right-0 mt-1 w-52 rounded-md shadow-lg p-2 ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className=" rounded  " role="none">
              <button
                className="flex items-center gap-3 px-4 py-2 text-xs hover:bg-blue-600 rounded w-full text-left"
                role="menuitem"
              >
                Notification 1
              </button>
              <button
                className="flex items-center gap-3 px-4 py-2 text-xs hover:bg-blue-600 rounded w-full text-left"
                role="menuitem"
              >
                Notification 2
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
