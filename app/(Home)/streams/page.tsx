"use client";
import React from "react";
import CommentatorStream from "../(commentator)/commentator-streams";
import AdminStream from "../(admin)/admin-streams";
// import { ROLE } from "@/app/enums/role";
import useUserStore from "@/store/use-store-user";

const Streams = () => {
  const user: any = useUserStore((state: any) => state.user);

  return (
    <>
      {user?.role === "COMMENTATOR" && <CommentatorStream />}
      {user?.role === "ADMIN" && <AdminStream />}
    </>
  );
};

export default Streams;
