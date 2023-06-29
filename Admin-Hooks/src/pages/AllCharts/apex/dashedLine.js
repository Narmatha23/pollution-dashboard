import React from "react";
import ReactApexChart from "react-apexcharts";
import { yearData, monthData, weekData } from "../../../common/data"; // Import the pollution data

const DashedLine = ({ periodType }) => {
  let pollutionData = [];

  // Set the pollution data based on the period type
  switch (periodType) {
    case "yearly":
      pollutionData = yearData;
      break;
    case "monthly":
      pollutionData = monthData;
      break;
    case "weekly":
      pollutionData = weekData;
      break;
    default:
      break;
  }

  const series = pollutionData.map((item) => ({
    name: item.name,
    data: item.data,
  }));

  const options = {
    chart: { zoom: { enabled: false }, toolbar: { show: false } },
    colors: ["#556ee6", "#f46a6a", "#34c38f"],
    dataLabels: { enabled: false },
    stroke: { width: [3, 4, 3], curve: "straight", dashArray: [0, 8, 5] },
    title: { text: "Page Statistics", align: "left" },
    markers: { size: 0, hover: { sizeOffset: 6 } },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (e) {
              return e + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (e) {
              return e + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (e) {
              return e;
            },
          },
        },
      ],
    },
    grid: { borderColor: "#f1f1f1" },
  };

  return (
    <ReactApexChart options={options} series={series} type="line" height="380" />
  );
};

export default DashedLine;
