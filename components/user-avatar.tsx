"use client";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiveBadge } from "@/components/live-badge";
import { usePathname } from "next/navigation";
import Link from "next/link";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
  icon?: any;
  link?: string;
}

export const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
  icon,
  link = "",
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;
  const pathname = usePathname();

  const href = `/${link}`;
  const isActive = pathname === href;
  return (
    <div className="relative">
      <div className="flex items-center gap-x-3">
        <Avatar
          className={cn(
            isLive && "ring-2 ring-rose-500",
            avatarSizes({ size })
          )}
        >
          {imageUrl ? (
            <Link href={link}>
              <AvatarImage src={imageUrl} className="object-cover" />
              <AvatarFallback>
                {username}
                {/* {username[username.length - 1]} */}
              </AvatarFallback>
            </Link>
          ) : (
            <div
              className={isActive ? "text-[#001BFF] p-1" : "p-1 text-[#778195]"}
            >
              {icon}
            </div>
          )}
        </Avatar>

        {imageUrl && (
          <Link href={link}>
            <p className="truncate text-xs hover:text-blue-500 flex gap-2 item-center">
              {username ?? "NO Found"}
            </p>
          </Link>
        )}
      </div>

      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return <Skeleton className={cn("rounded-full", avatarSizes({ size }))} />;
};
