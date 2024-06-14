"use client";

import { User } from "@prisma/client";

import { useSidebar } from "@/store/use-sidebar";

import { UserItem, UserItemSkeleton } from "./user-item";
import { Compass, LayoutGrid, Users, Calendar, Home } from "lucide-react";

interface RecommendedProps {
  data: (User & {
    stream: { isLive: boolean } | null;
  })[];
}

const data = [
  {
    id: 1,
    username: "Home",
    imageUrl: "",
    link: "",
    icon: <Home size={25} />,
  },
  {
    id: 2,
    username: "Discover",
    imageUrl: "",
    link: "discover",
    icon: <Compass size={25} />,
  },
  {
    id: 3,
    username: "Category",
    imageUrl: "",
    link: "category",
    icon: <LayoutGrid size={25} />,
  },
  {
    id: 4,
    username: "Following",
    imageUrl: "",
    link: "following",
    icon: <Users />,
  },
  {
    id: 5,
    username: "Events",
    imageUrl: "",
    link: "events",
    icon: <Calendar />,
  },
];

export const Recommended = () => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data?.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm ">MENU</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data?.map((user: any) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            link={user?.link}
            icon={user?.icon}
            // isLive={user.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
