import React from "react";
import CommentatorStream from "../(commentator)/commentator-streams";
import AdminStream from "../(admin)/admin-streams";
import { ROLE } from "@/app/enums/role";

const Streams = () => {
  const user = { role: "COMMENTATOR" };
  return (
    <>
      {user?.role === ROLE?.COMMENTATOR && <CommentatorStream  />}
      {user?.role === ROLE?.ADMIN && <AdminStream />}
    </>
  );
};

export default Streams;
