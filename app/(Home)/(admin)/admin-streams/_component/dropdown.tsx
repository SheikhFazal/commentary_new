"use client";
import { AlignJustify } from "lucide-react";
import React, { useState } from "react";

const DropdownMenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (action: any) => {
    console.log(action);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
        //   className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <AlignJustify size={16}/>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-1 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 text-black" role="none">
            <button
              className=" block px-4 py-2 text-xs hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("End Live Stream")}
            >
              End Live Stream
            </button>
            <button
              className=" block px-4 py-2 text-xs hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("Block Stream")}
            >
              Block Stream
            </button>
            <button
              className=" block px-4 py-2 text-xs hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("Delete Stream")}
            >
              Delete Stream
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuComponent;
