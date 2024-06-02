import { Ban } from "lucide-react";
import React from "react";

const UserBans = ({ userBanData }: any) => {
  return (
    <div>
      <div className="mb-5">
        <span className="font-medium text-sm">USER BANS</span>
      </div>
      <div className="max-h-[280px] overflow-y-scroll hidden-scrollbar">
        {userBanData?.length &&
          userBanData?.map((ele: any) => (
            <div
              key={ele?.id}
              className="flex justify-between items-center py-3"
            >
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    // className="h-full w-full rounded-full "
                    className={`h-full w-full rounded-full ${
                      ele.ban ? "grayscale" : ""
                    }`}
                    src={ele?.profileImg}
                    alt={ele?.user}
                  />
                </div>
                <p
                  // className="text-sm"
                  className={`text-sm ${ele.ban ? "text-gray-700" : ""}`}
                >
                  {ele?.user}
                </p>
              </div>
              <div className="">
                <Ban color={ele.ban ? "#292a2e" : "#790b10"} size={17} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserBans;
