"use client";
import React from "react";
import { VerifiedMark } from "@/components/verified-mark";
import { BioModal } from "@/components/stream-player/bio-modal";
import { PublicProfileAbout } from "./public-profile-about";
import * as Tabs from "@radix-ui/react-tabs";
import { Plus } from "lucide-react";

import { PersonalDetails } from "./personal-details";
import { ProfileVideo } from "./profile-videos";
import { UserAvatar } from "@/components/user-avatar";

const userDetails: any = [
  { id: 1, heading: "Full Name", details: "Mark Charles Jefford Nicholas" },
  {
    id: 2,
    heading: "Born",
    details: "September 29, 1957, Westminster, London",
  },
  { id: 3, heading: "AGE", details: "66y 201d" },
  { id: 4, heading: "BATTING STYLE", details: "Right Hand Bat" },
  { id: 5, heading: "BOWLING STYLE", details: "Right Arm Medium" },
  { id: 6, heading: "EDUCATION", details: "Bradfield College" },
  { id: 7, heading: "RELATIONS", details: "FWH Nicholas (grandfather)" },
  { id: 8, heading: "Others", details: "FWH Nicholas Commentator" },
];

const UserPublicProfile = ({
  hostName = "john Smith",
  hostIdentity,
  viewerIdentity,
  bio = "somthing bio",
  followedByCount,
}: any) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  const followedByLabel = followedByCount === 1 ? "follower" : "followers";
  return (
    <div>
      <div className="">
        <div className="group rounded-t-xl bg-[#11151e] p-6 lg:p-10 gap-4 grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex sm:flex-row flex-col items-center md:justify-start justify-center  gap-3">
            <div className="">
              <UserAvatar
                username=""
                size={"lg"}
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGg1BR6MYS3MhZYqUz09NV1PvigOy0GOXGDChOWB9Tx-5423zzYcRLlo5cxjNY8dUXOU&usqp=CAU"
                }
                isLive={false}
              />
            </div>
            <div className="flex  font-semibold text-lg lg:text-2xl">
              <div className="flex flex-col sm:text-start text-center">
                {hostName}
                <span className="text-xs font-light tracking-wide">
                  Westminster, London
                </span>
              </div>
              <div className="pt-2 sm:pl-2">
                <VerifiedMark />
              </div>
            </div>
            {isHost && <BioModal initialValue={bio} />}
            <button className="px-4 text-xs  flex items-center py-3 md:rounded-full rounded-xl bg-[#374CFF]">
              <Plus size={14}/>
              Follow
            </button>
          </div>
          <div className="text-sm flex sm:gap-6 gap-3 md:px-5 md:justify-end justify-center">
            {/* <span className="font-semibold text-primary">
              {followedByCount}
            </span>{" "}
            {followedByLabel} */}
            <div className="list-none">
              <li className="font-semibold sm:text-xl text-lg">10,432</li>
              <li className="sm:text-sm text-xs ">Followers</li>
            </div>
            <div className="list-none">
              <li className="font-semibold sm:text-xl text-lg">10,432</li>
              <li className="sm:text-sm text-xs ">Following</li>
            </div>
            <div className="list-none">
              <li className="font-semibold sm:text-xl text-lg">10,432</li>
              <li className="sm:text-sm text-xs ">Matches</li>
            </div>
          </div>
        </div>
        <Tabs.Root className="flex flex-col w-full" defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex "
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="border-b border-opacity-0 bg-[#141924] sm:p-8 p-3 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none  select-none rounded-bl-xl data-[state=active]:border-opacity-100 border-b-2 border-[#001BFF]  data-[state=active]:focus:relative"
              value="tab1"
            >
              Overviews
            </Tabs.Trigger>
            <Tabs.Trigger
              className="border-b border-opacity-0 bg-[#141924] sm:p-8 p-3 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none  select-none rounded-br-xl data-[state=active]:border-opacity-100 border-b-2 border-[#001BFF]  data-[state=active]:focus:relative"
              value="tab2"
            >
              Videos
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className=" py-10 rounded-b-md outline-none "
            value="tab1"
          >
            <div className="grid grid-cols-12  sm:gap-8 ">
              <div className="md:col-span-7 sm:col-span-6 col-span-12 bg-[#141924] p-8 sm:mb-0 mb-7 rounded-xl ">
                <PublicProfileAbout />
              </div>
              <div className="md:col-span-5 sm:col-span-6 col-span-12 bg-[#141924] p-8  rounded-xl">
                {userDetails?.map((ele: any) => (
                  <React.Fragment key={ele}>
                    <PersonalDetails ele={ele} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content
            className=" py-10 rounded-b-md outline-none "
            value="tab2"
          >
            <div className="bg-[#141924] p-8 rounded-xl">
              <ProfileVideo />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default UserPublicProfile;
