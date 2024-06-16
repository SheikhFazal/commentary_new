"use client";
import { UserAvatar } from "@/components/user-avatar";
import React, { useRef, useState } from "react";
import { eventsData } from "./data";
import { Calendar, ChevronRight } from "lucide-react";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef<any>(null);

  const handleButtonClick = () => {
    dateInputRef.current.showPicker();
  };

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
  };
  return (
    <div>
      <div className="pb-8">
        <span className="font-semibold text-xl">Events</span>
      </div>
      <div className="mb-6 relative">
        <button
          onClick={handleButtonClick}
          className="px-4 py-5 text-xl flex items-center justify-between gap-3 bg-[#222938] w-full font-medium text-white rounded-lg "
        >
          <span className="flex gap-2">
            <Calendar color="#778195" />{" "}
            {selectedDate ? `Selected date: ${selectedDate}` : "Calendar"}
          </span>
          <ChevronRight />
        </button>
        <input
          type="date"
          ref={dateInputRef}
          className="absolute top-5 mt-2 block p-2 invisibility rounded shadow-lg"
          onChange={handleDateChange}
          style={{ zIndex: -1 }}
        />
      </div>
      <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8">
        {eventsData?.length &&
          eventsData?.map((ele) => (
            <div key={ele?.id} className="mb-3">
              <div className="overflow-hidden h-40 rounded-3xl w-full relative">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src={ele?.thumbnailUrl} alt="" className="w-full" />
              </div>
              <div className="my-2">
                <span className="font-semibold ">{ele?.title}</span>
              </div>

              <div className="mt-3 flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <UserAvatar
                    username={ele?.name}
                    imageUrl={ele?.imageUrl}
                    isLive={false}
                    link={'/user-profile'}
                  />
                  {/* <div className="flex flex-col text-xs overflow-hidden">
                    <p className="truncate  hover:text-blue-500 flex gap-2 item-center">
                      {ele?.name}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-4 py-14">
        <div className="border border-[#3F495F] w-[45%]"></div>
        <button className="text-[#001BFF] text-xs">Show More</button>
        <div className="border border-[#3F495F] w-[45%]"></div>
      </div>
    </div>
  );
};

export default Events;
