"use client";
import React, {
  ReactNode,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { usePathname, useRouter } from "next/navigation";
import NotFoundPage from "../not-found";
import useUserStore from "@/store/use-store-user";

interface HomeLayoutProps {
  children: ReactNode;
}
const UnauthorizedPage = () => <div>401 Unauthorized</div>;

const HomeLayout = ({ children }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUserStore((state: any) => state.user);

  const [loadedComponent, setLoadedComponent] = useState<ReactNode>(null);

  const [isHydrated, setIsHydrated] = useState(false); // New state to check if Zustand is hydrated

  useEffect(() => {
    setIsHydrated(true); // Zustand is now hydrated
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    // const loadComponent = async () => {
    //   if (user.role === "ADMIN") {
    //     if (pathname.startsWith("/dashboard")) {
    //       const DashboardPage = (await import("./(admin)/dashboard/page"))
    //         .default;
    //       setLoadedComponent(<DashboardPage />);
    //     } else if (pathname.startsWith("/users")) {
    //       const UsersPage = (await import("./(admin)/users/page")).default;
    //       setLoadedComponent(<UsersPage />);
    //     } else if (pathname.startsWith("/streams")) {
    //       const AdminStreamsPage = (await import("./streams/page")).default;
    //       setLoadedComponent(<AdminStreamsPage />);
    //     }
    //   } else if (user.role === "COMMENTATOR") {
    //     if (pathname.startsWith("/streams")) {
    //       const StreamPage = (await import("./streams/page")).default;
    //       setLoadedComponent(<StreamPage />);
    //     } else if (pathname.startsWith("/keys")) {
    //       const KeysPage = (await import("./(commentator)/keys/page")).default;
    //       setLoadedComponent(<KeysPage />);
    //     } else if (pathname.startsWith("/chat")) {
    //       const ChatPage = (await import("./(commentator)/chat/page")).default;
    //       setLoadedComponent(<ChatPage />);
    //     } else if (pathname.startsWith("/community")) {
    //       const CommunityPage = (await import("./(commentator)/community/page"))
    //         .default;
    //       setLoadedComponent(<CommunityPage />);
    //     } else if (pathname.startsWith("/history")) {
    //       const HistoryPage = (await import("./(commentator)/history/page"))
    //         .default;
    //       setLoadedComponent(<HistoryPage />);
    //     }
    //   }
    // };

    const loadComponent = async () => {
      if (user.role === "ADMIN") {
        if (pathname.startsWith("/dashboard")) {
          const DashboardPage = (await import("./(admin)/dashboard/page"))
            .default;
          setLoadedComponent(<DashboardPage />);
        } else if (pathname.startsWith("/users")) {
          const UsersPage = (await import("./(admin)/users/page")).default;
          setLoadedComponent(<UsersPage />);
        } else if (pathname.startsWith("/streams")) {
          const AdminStreamsPage = (await import("./streams/page")).default;
          setLoadedComponent(<AdminStreamsPage />);
        } else {
          setLoadedComponent(<UnauthorizedPage />);
        }
      } else if (user.role === "COMMENTATOR") {
        if (pathname.startsWith("/streams")) {
          const StreamPage = (await import("./streams/page")).default;
          setLoadedComponent(<StreamPage />);
        } else if (pathname.startsWith("/keys")) {
          const KeysPage = (await import("./(commentator)/keys/page")).default;
          setLoadedComponent(<KeysPage />);
        } else if (pathname.startsWith("/chat")) {
          const ChatPage = (await import("./(commentator)/chat/page")).default;
          setLoadedComponent(<ChatPage />);
        } else if (pathname.startsWith("/community")) {
          const CommunityPage = (await import("./(commentator)/community/page"))
            .default;
          setLoadedComponent(<CommunityPage />);
        } else if (pathname.startsWith("/history")) {
          const HistoryPage = (await import("./(commentator)/history/page"))
            .default;
          setLoadedComponent(<HistoryPage />);
        } else {
          setLoadedComponent(<UnauthorizedPage />);
        }
      } else {
        setLoadedComponent(<UnauthorizedPage />);
      }
    };

    loadComponent();
  }, [pathname, user, isHydrated, router]);
  if (!isHydrated) {
    return null; // or a loading spinner
  }
  return (
    <>
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <Container>{loadedComponent}</Container>
      </div>
    </>
  );
};

export default HomeLayout;
