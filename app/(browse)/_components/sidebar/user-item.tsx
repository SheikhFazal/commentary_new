"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { LiveBadge } from "@/components/live-badge";

interface UserItemProps {
  username: string;
  imageUrl: string;
  link: string;
  isLive?: boolean;
  icon?: any;
}

export const UserItem = ({
  username,
  imageUrl,
  isLive,
  link,
  icon,
}: UserItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const href = `/${link}`;
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        // asChild
        // variant="ghost"
        className={
          `flex  w-full p-3 ${collapsed ? "justify-center" : "justify-start"}`
          // isActive && "bg-accent"
        }
        style={{ borderLeft: `${isActive ? "4px solid #011af0" : ""}` }}
      >
        <div
          className={cn(
            "flex  w-full items-center gap-6",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar
            imageUrl={imageUrl}
            username={username}
            icon={icon}
            link={link}
            // isLive={isLive}
          />
          {!collapsed && (
            <p className={isActive ? "text-[#011af0]" : "text-[#778195]"}>
              {username}
            </p>
          )}
          {/* {!collapsed  && (
            <LiveBadge className="ml-auto" />
          )} */}
        </div>
      </button>
    </Link>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
