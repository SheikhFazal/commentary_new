"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

const TotalVisitorAndTrafficWidget = (props: any) => {
  const { xAxisData, seriesData, widgetHeading } = props;
  const options = {
    tooltip: {
      show: false,
      // trigger: "axis",
    },
    // legend: {
    //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    // },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisData ?? [],
      axisLine: {
        show: true,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
      },
      splitLine: {
        show: false,
      },
    },

    series: seriesData ?? [],
  };

  return (
    <div>
      <div className="">
        <span className="font-medium text-sm uppercase ">{widgetHeading}</span>
      </div>
      <ReactECharts option={options} lazyUpdate={true} />
    </div>
  );
};

export default TotalVisitorAndTrafficWidget;
