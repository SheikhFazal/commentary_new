"use client";

import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/use-store-user";
import { useEffect, useState } from "react";
import { Notification } from "./notification";

export const Actions = () => {
  const setUser = useUserStore((state: any) => state.setUser);

  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotification] = useState(false);
  // const user = await currentUser();
  const router = useRouter();
  const user = useUserStore((state: any) => state?.user);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsNotification(false);
  };
  const [isHydrated, setIsHydrated] = useState(false); // New state to check if Zustand is hydrated
  useEffect(() => {
    setIsHydrated(true); // Zustand is now hydrated
  }, [user, isHydrated]);
  if (!isHydrated) {
    return null; // or a loading spinner
  }
  return (
    <>
      {!user && (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
          <button
            onClick={() => router.push("/sign-in")}
            className="px-4 text-xs py-3 md:rounded-full rounded-xl border border-[#374CFF]"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="px-4 text-xs py-3 w-24 md:rounded-full rounded-xl  bg-[#374CFF]"
          >
            Join Now
          </button>
        </div>
      )}
      {user && (
        <div className=" flex items-end gap-6">
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
                  className="h-9 w-9 rounded-full"
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
                  {[0, 1, 2]?.map((ele: any) => (
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
        </div>
      )}
    </>
  );
};
