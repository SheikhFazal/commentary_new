"use client";
import {
  ChevronDown,
  Gauge,
  LogOut,
  Settings,
  Bell,
  Radio,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Notification } from "./notification";
import { GoLiveModalBox } from "./go-live-modal";
import useUserStore from "@/store/use-store-user";

export const Actions = () => {
  const setUser = useUserStore((state: any) => state.setUser);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsNotification(false);
  };

  const handleMenuItemClick = (action: any) => {
    console.log(action);
    setIsOpen(false);
  };
  const user = useUserStore((state: any) => state?.user);
  // const user = {
  //   imageUrl:
  //     "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  //   name: "cricket.com.au ",
  //   email: "@cricketcomau",
  //   role: "COMMENTATOR",
  // };

  const commentatorLinks: any = [
    {
      id: 1,
      text: "Dashboard",
      link:
        user?.role === "COMMENTATOR"
          ? "/streams"
          : user?.role === "ADMIN" && "/dashboard",
      // link1: "/streams",
      // link2: "/dashboard",
      icon: <Gauge size={17} />,
    },
    {
      id: 2,
      text: "Manage Account",
      link: "/manage-account",
      icon: <Settings size={17} />,
    },
  ];

  return (
    <div className=" flex sm:items-end items-center sm:gap-6 gap-3">
      {user?.role === "COMMENTATOR" && (
        <div className="">
          <button
            className="flex gap-1 items-center text-xs sm:p-3 p-2 bg-[#001BFF] sm:rounded-full rounded-lg"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <Radio size={16} /> Go Live
          </button>
        </div>
      )}
      <div className="">
        <Notification
          setIsOpen={setIsOpen}
          isNotificationOpen={isNotificationOpen}
          setIsNotification={setIsNotification}
        />
      </div>
      <div className="relative inline-block text-left">
        <div>
          <button
            className="flex items-center gap-2"
            type="button"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg`}
              className="sm:h-9 sm:w-9 h-8 w-8 rounded-full"
              alt=""
            />
            <ChevronDown size={16} />
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute bg-[#001BFF] right-0 mt-1 w-52 rounded-md shadow-lg p-2 ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="p-3 flex items-center  gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg`}
                className="h-7 w-7 rounded-full"
                alt=""
              />
              <div className="flex flex-col overflow-hidden">
                <span>{user?.name}</span>
                <span className="text-xs ">{user?.email}</span>
              </div>
            </div>
            <div className=" rounded  " role="none">
              {commentatorLinks?.map((ele: any) => (
                <button
                  key={ele?.id}
                  className="flex items-center gap-3 px-4 py-2 text-xs hover:bg-blue-600 rounded w-full text-left"
                  role="menuitem"
                  onClick={() => router.push(ele?.link)}
                >
                  <span className="">{ele?.icon}</span>
                  {ele?.text}
                </button>
              ))}

              <button
                className=" flex items-center gap-3 px-4 py-2 text-xs  hover:bg-blue-600 rounded w-full text-left"
                role="menuitem"
                onClick={() => setUser(null)}
              >
                <LogOut size={17} /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
      {showModal && user?.role === "COMMENTATOR" && (
        <GoLiveModalBox showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
