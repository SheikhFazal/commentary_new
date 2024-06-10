import { Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { Container } from "./_components/container";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import PageLoader from "../loading";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Navbar />
      <div className="flex   pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </Suspense>
  );
};

export default BrowseLayout;
