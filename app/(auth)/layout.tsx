"use client";
import { useRouter } from "next/navigation";
import { Logo } from "./_components/logo";
import useUserStore from "@/store/use-store-user";
import { useEffect, useState } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state: any) => state.user);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (user?.role === "ADMIN") {
      return router.push("/dashboard");
    }
    if (user?.role === "COMMENTATOR") {
      router.push("/streams");
    }
    if (user?.role === "USER") {
      router.push("/");
    }
  }, [user, router]);
  // Render nothing on the server to avoid mismatch
  if (!isMounted) {
    return null;
  }
  return (
    !user && (
      <div className=" grid grid-cols-12 ">
        <Logo />
        {children}
      </div>
    )
  );
};

export default AuthLayout;
