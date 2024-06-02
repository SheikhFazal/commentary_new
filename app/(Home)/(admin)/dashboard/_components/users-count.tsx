"use client";
import React from "react";
import { Ban } from "lucide-react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import ReactECharts from "echarts-for-react";

import * as echarts from "echarts/core";

const UsersCount = () => {
  const options = {
    tooltip: {},
    xAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: "sales",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  return (
    <div>
      <div className="mb-5">
        <span className="font-medium text-sm">USERS COUNT</span>
      </div>
      <div className="">
        <ReactECharts
          option={options}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
          // opts={}
        />
      </div>
    </div>
  );
};

export default UsersCount;
