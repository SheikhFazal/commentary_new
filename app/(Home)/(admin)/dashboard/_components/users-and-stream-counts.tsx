"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import ReactECharts from "echarts-for-react";

const UserAndStreamCountsWidget = (props: any) => {
  const {
    chartData,
    widgetHeading,
    totalUsersOrTotalStreamsText,
    totalUsersOrTotalStreamsValue,
    rating,
    // themeName,
  } = props;
  const options = {
    tooltip: {},
    xAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [],
    },
    grid: {
      height: "60%",
      width: "100%",
      top: "0%",
      left: "0%",
      // right: "20%",
      // bottom: "20%",
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: [],
    },
    series: [
      {
        name: "sales",
        type: "line",
        data: chartData ?? [5, 8, 15, 8, 15, 20, 30],
        color: "#011aeb",
        showSymbol: false,
        // smooth: true,
      },
    ],
  };
  return (
    <div>
      <div className="">
        <span className="font-medium text-sm uppercase ">{widgetHeading}</span>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-3 overflow-hidden">
        <div className="flex flex-col  gap-5 sm:p-0 p-3">
          <p className="text-2xl mb-2 whitespace-nowrap">
            {totalUsersOrTotalStreamsText} <br />
            <span className="font-semibold text-5xl">
              {totalUsersOrTotalStreamsValue}
            </span>
          </p>
          <span className="flex text-[15px]  items-center text-[#229a2f]">
            {rating} <ArrowUpRight size={17} />{" "}
          </span>
        </div>
        <div className=" overflow-hidden max-h-[200px] sm:w-9/12 w-full">
          <ReactECharts option={options} lazyUpdate={true} />
        </div>
      </div>
    </div>
  );
};

export default UserAndStreamCountsWidget;
