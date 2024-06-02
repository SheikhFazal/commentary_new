import React from "react";
import UserTable from "./_components/table";

const AdminUsers = () => {
  return (
    <div>
      <div className="pb-5">
        <span className="text-2xl font-semibold ">Users Management</span>
      </div>
      <div className="mb-10">
        <input
          type="text"
          className="rounded-3xl bg-[#11151e] w-[38%] py-3 px-5 text-sm"
          placeholder="Search User..."
          name=""
          id=""
        />
      </div>
      <div className="">
        <UserTable />
      </div>
    </div>
  );
};

export default AdminUsers;
