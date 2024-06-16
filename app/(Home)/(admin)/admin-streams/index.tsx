import { UserAvatar } from "@/components/user-avatar";
import { Check } from "lucide-react";
import React from "react";
import DropdownMenuComponent from "./_component/dropdown";
import Image from "next/image";
import { featureData } from "./_component/data";

const AdminStream = () => {
  return (
    <div>
      <div className="pb-5">
      <span className="text-2xl font-semibold ">Streams</span>
      </div>
      <div className="mb-10">
        <input type="text" className="rounded-3xl bg-[#11151e] w-[38%] py-3 px-5 text-sm" placeholder="Search Stream..."  name="" id="" />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {featureData?.length &&
          featureData?.map((ele) => (
            <div key={ele?.id} className=" border rounded-lg">
              <div className="pt-5 px-5">
                <div className=" flex justify-between items-center mb-5">
                  <div className="flex items-center gap-x-3">
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-6 h-6 rounded-full"
                      src={ele?.channelProfilePicture}
                      alt={ele?.channelName}
                    />
                    <div className="flex flex-col text-sm overflow-hidden">
                      <p className="truncate font-semibold hover:text-blue-500 flex gap-2 item-center">
                        {ele?.channelName}
                        {ele?.isGreenChecked && (
                          <Check color="#00D247" size={16} />
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <DropdownMenuComponent />
                  </div>
                </div>
                <div className="overflow-hidden h-50 rounded-lg w-full ">
                  {/*  eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ele?.thumbnailUrl}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="my-2">
                  <span className="font-semibold text-lg">{ele?.title}</span>
                </div>
                <div className="text-xs flex items-center gap-2 my-2">
                  <span>{ele?.views} views -</span>
                  <span>{ele?.time} ago</span>
                </div>
              </div>
              <div className="p-5 mt-5 bg-[#11151e]">
                <div className="flex flex-wrap justify-between items-center">
                  <span className="text-[9px] text-gray-500 tracking-[2px]">
                    COMMENTATOR
                  </span>
                  <div className="flex items-center gap-x-3">
                    <UserAvatar
                      username={ele?.username}
                      // link={'/user-profile'}
                      imageUrl={ele?.channelProfilePicture}
                      isLive={false}
                    />
                    <div className="flex flex-col text-sm overflow-hidden">
                      {/* <p className="truncate font-semibold hover:text-blue-500 flex gap-1 item-center">
                        {ele?.username}
                      </p> */}
                      <span className="text-[10px]">{ele?.hashTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminStream;
