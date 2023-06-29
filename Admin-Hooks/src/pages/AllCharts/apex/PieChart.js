import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const options = {
    labels: ["Air Pollution", "Water Pollution", "Noise Pollution"],
    colors: ["#34c38f", "#556ee6", "#f46a6a"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const pollutionData = [
    { label: "Air Pollution", value: 78 },
    { label: "Water Pollution", value: 42 },
    { label: "Noise Pollution", value: 23 },
  ];

  const series = pollutionData.map((item) => item.value);

  options.labels = pollutionData.map((item) => item.label);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      height="380"
    />
  );
};

export default PieChart;
