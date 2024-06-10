"use client";
import React, { ReactNode, Suspense, useEffect, useState } from "react";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { usePathname } from "next/navigation";
import NotFoundPage from "../not-found";

const user = { role: "COMMENTATOR" };

interface HomeLayoutProps {
  children: ReactNode;
}
const HomeLayout = ({ children }: any) => {
  const pathname = usePathname();

  const [loadedComponent, setLoadedComponent] = useState<ReactNode>(null);

  useEffect(() => {
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
        }
      } else {
        return <NotFoundPage />;
      }
    };

    loadComponent();
  }, [pathname]);
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
