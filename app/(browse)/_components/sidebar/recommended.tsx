"use client";

import { User } from "@prisma/client";

import { useSidebar } from "@/store/use-sidebar";

import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProps {
  data: (User & {
    stream: { isLive: boolean } | null;
  })[];
}

const data = [
  { id: 1, username: "Discover", imageUrl: "", link: "discover" },
  { id: 2, username: "Category", imageUrl: "", link: "category" },
  { id: 2, username: "Following", imageUrl: "", link: "following" },
  { id: 2, username: "Events", imageUrl: "", link: "events" },
];

export const Recommended = () => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data?.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data?.map((user: any) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            link={user?.link}
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
