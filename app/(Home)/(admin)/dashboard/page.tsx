import React from "react";
import UsersCount from "./_components/users-count";
import StreamCounts from "./_components/stream-counts";
import TotalVisitors from "./_components/total-visitors";
import TotalTraffic from "./_components/total-traffic";
import UserBans from "./_components/user-bans";

const AdminDashboard = () => {
  const userBanData = [
    {
      id: 1,
      user: "Baghera Jones",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: true,
    },
    {
      id: 2,
      user: "Doigby",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: true,
    },
    {
      id: 3,
      user: "AngleDroit",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: false,
    },
    {
      id: 4,
      user: "BagheraJones",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: true,
    },
    {
      id: 5,
      user: "Gom 4 Art",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: false,
    },
    {
      id: 6,
      user: "Randy Origoan",
      profileImg:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      ban: true,
    },
  ];
  return (
    <div className="hidden-scrollbar">
      <div className="pb-5">
        <span className="text-2xl font-semibold ">Admin Dashboard</span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="border bg-[#11151e] p-5 rounded-2xl">
          <UsersCount  />
        </div>
        <div className="border bg-[#11151e] p-5 rounded-2xl">
          <StreamCounts />
        </div>
        <div className="border bg-[#11151e] p-5 rounded-2xl">
          <TotalVisitors />
        </div>
        <div className="border bg-[#11151e] p-5 rounded-2xl">
          <TotalTraffic />
        </div>
        <div className="border bg-[#11151e] p-5 rounded-2xl">
          <UserBans userBanData={userBanData}/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
