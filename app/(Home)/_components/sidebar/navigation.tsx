"use client";

// import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  Gauge,
  UserRound,
  Tv,
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users,
  History,
} from "lucide-react";

import { NavItem, NavItemSkeleton } from "./nav-item";
import { ROLE } from "@/app/enums/role";

export const Navigation = () => {
  const pathname = usePathname();
  // const { user } = useUser();
  const user = { role: "COMMENTATOR" };
  const routes = [
    user?.role === ROLE?.ADMIN
      ? {
          label: "Dashboard",
          href: `/dashboard`,
          icon: Gauge,
        }
      : null,
    user?.role === ROLE?.ADMIN
      ? {
          label: "Users",
          href: `/users`,
          icon: UserRound,
        }
      : null,
    // user?.role === ROLE?.ADMIN
    //   ? {
    //       label: "Streams",
    //       href: `/streams`,
    //       icon: Tv,
    //     }
    //   : null,
    user?.role === ROLE?.COMMENTATOR || user?.role === ROLE?.ADMIN
      ? {
          label: "Stream",
          href: `/streams`,
          icon: Fullscreen,
        }
      : null,
    user?.role === ROLE?.COMMENTATOR
      ? {
          label: "Keys",
          href: `/keys`,
          icon: KeyRound,
        }
      : null,
    user?.role === ROLE?.COMMENTATOR
      ? {
          label: "Chat",
          href: `/chat`,
          icon: MessageSquare,
        }
      : null,
    user?.role === ROLE?.COMMENTATOR
      ? {
          label: "Community",
          href: `/community`,
          icon: Users,
        }
      : null,
    user?.role === ROLE?.COMMENTATOR
      ? {
          label: "History",
          href: `/history`,
          icon: History,
        }
      : null,
  ].filter(Boolean);

  // if (!user?.username) {
  //   return (
  //     <ul className="space-y-2">
  //       {[...Array(4)].map((_, i) => (
  //         <NavItemSkeleton key={i} />
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route: any) => (
        <NavItem
          key={route?.href}
          label={route?.label}
          icon={route?.icon}
          href={route?.href}
          isActive={pathname === route?.href}
        />
      ))}
    </ul>
  );
};
