import React from "react"
import ReactApexChart from "react-apexcharts"

const LineColumnArea = () => {
  const pollutionData = [
    { name: "Air Pollution", columnData: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30], areaData: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43], lineData: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39] },
    { name: "Water Pollution", columnData: [10, 15, 12, 17, 14, 19, 15, 20, 18, 13, 16], areaData: [35, 40, 38, 42, 39, 45, 43, 47, 41, 44, 39], lineData: [28, 32, 30, 34, 31, 36, 33, 37, 35, 31, 33] },
    { name: "Noise Pollution", columnData: [5, 8, 6, 10, 7, 12, 9, 11, 8, 6, 9], areaData: [20, 25, 22, 28, 24, 30, 27, 29, 26, 23, 27], lineData: [18, 22, 20, 24, 21, 26, 23, 27, 25, 21, 23] },
  ];
  
  const series = pollutionData.map(item => ({
    name: item.name,
    type: "column",
    data: item.columnData,
  }));
  
  series.push(...pollutionData.map(item => ({
    name: item.name,
    type: "area",
    data: item.areaData,
  })));
  
  series.push(...pollutionData.map(item => ({
    name: item.name,
    type: "line",
    data: item.lineData,
  })));
  
  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#f46a6a", "#556ee6", "#34c38f"],

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    legend: {
      offsetY: 11,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points"
          }
          return y
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="350"
    />
  )
}

export default LineColumnArea
