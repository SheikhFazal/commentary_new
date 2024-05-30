"use client";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
// import {
//   SignInButton,
//   UserButton,
//   currentUser
// } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Actions = async () => {
  // const user = await currentUser();
  const router = useRouter();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <button
        onClick={() => router.push("/sign-in")}
        className="px-4 text-xs py-3 md:rounded-full rounded-xl border border-[#374CFF]"
      >
        Login
      </button>
      <button
        onClick={() => router.push("/sign-up")}
        className="px-4 text-xs py-3 w-24 md:rounded-full rounded-xl  bg-[#374CFF]"
      >
        Join Now
      </button>
      {/* {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">
                Dashboard
              </span>
            </Link>
          </Button>
          <UserButton
            afterSignOutUrl="/"
          />
        </div>
      )} */}
    </div>
  );
};
