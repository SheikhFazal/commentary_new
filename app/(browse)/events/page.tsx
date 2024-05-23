import { UserAvatar } from "@/components/user-avatar";
import React from "react";
import { eventsData } from "./data";

const Events = () => {
  return (
    <div>
      <div className="pb-8">
        <span className="font-semibold text-xl">Events</span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {eventsData?.length &&
          eventsData?.map((ele) => (
            <div key={ele?.id} className="mb-3">
              <div className="overflow-hidden h-40 rounded-3xl w-full ">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src={ele?.thumbnailUrl} alt="" className="h-full w-full" />
              </div>
              <div className="my-2">
                <span className="font-semibold ">{ele?.title}</span>
              </div>
             
              <div className="mt-3">
                <div className="flex items-center gap-x-3">
                  <UserAvatar
                    username=""
                    imageUrl={ele?.imageUrl}
                    isLive={false}
                  />
                  <div className="flex flex-col text-xs overflow-hidden">
                    <p className="truncate  hover:text-blue-500 flex gap-2 item-center">
                      {ele?.name}
                    </p>
                  </div>
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
