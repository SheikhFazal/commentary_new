import { redirect } from "next/navigation";

// import { getSelfByUsername } from "@/lib/auth-service";

import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { Container } from "./_components/container";
import PageLoader from "@/app/loading";
import { Suspense } from "react";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  // const self = await getSelfByUsername(params.username);
  const self = "streamer";
  if (!self) {
    redirect("/");
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Navbar />
      <div className="flex  pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </Suspense>
  );
};

export default CreatorLayout;
