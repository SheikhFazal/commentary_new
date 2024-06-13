import React from "react";
import CommentatorStream from "../(commentator)/commentator-streams";
import AdminStream from "../(admin)/admin-streams";
import { ROLE } from "@/app/enums/role";
import useUserStore from "@/store/use-store-user";

const Streams = () => {
  const user = useUserStore((state: any) => state.user);

  return (
    <>
      {user?.role === ROLE?.COMMENTATOR && <CommentatorStream />}
      {user?.role === ROLE?.ADMIN && <AdminStream />}
    </>
  );
};

export default Streams;
