import React from "react";
import UserBans from "./_components/user-bans";
import UserAndStreamCountsWidget from "./_components/users-and-stream-counts";
import TotalVisitorAndTrafficWidget from "./_components/total-visitors-and-traffic";
import {
  totalVisitorXAxisData,
  totalVisitorsSeriesData,
  trafficSeriesData,
  trafficXAxisData,
  userBanData,
} from "./_components/data";

const AdminDashboard = () => {
  return (
    <div className="hidden-scrollbar">
      <div className="pb-5">
        <span className="text-2xl font-semibold ">Admin Dashboard</span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className=" bg-[#11151e] py-5 px-7 rounded-2xl">
          <UserAndStreamCountsWidget
            chartData={[0, 2, 8, 6, 8, 4, 2]}
            widgetHeading={"USERS COUNT"}
            totalUsersOrTotalStreamsText={"Total Users"}
            totalUsersOrTotalStreamsValue={"9,789"}
            rating={0.892}
          />
        </div>
        <div className=" bg-[#11151e]  py-5 px-7 rounded-2xl">
          <UserAndStreamCountsWidget
            chartData={[0, 2, 8, 6, 8, 4, 2]}
            widgetHeading={"STREAMS COUNT"}
            totalUsersOrTotalStreamsText={"Total Streams"}
            totalUsersOrTotalStreamsValue={"238"}
            rating={0.15}
          />
        </div>
        <div className=" bg-[#11151e] py-5 px-7 rounded-2xl">
          <TotalVisitorAndTrafficWidget
            xAxisData={totalVisitorXAxisData}
            seriesData={totalVisitorsSeriesData}
            widgetHeading={"Total sites visitors"}
          />
        </div>
        <div className=" bg-[#11151e] py-5 px-7 rounded-2xl">
          <TotalVisitorAndTrafficWidget
            xAxisData={trafficXAxisData}
            seriesData={trafficSeriesData}
            widgetHeading={"Traffic"}
          />
        </div>
        <div className=" bg-[#11151e]  py-5 px-7 rounded-2xl">
          <UserBans userBanData={userBanData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
