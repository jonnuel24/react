import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  let myChart = null; // Variable to store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create the chart
    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [500, 300, 200], // Example data for available, sold, and transit
            backgroundColor: [
              "rgba(123, 127, 138, 1)",
              "rgba(0, 178, 146, 1)",
              "rgba(192, 38, 38, 1)",
            ],
            
            borderWidth: 1,
          },
        ],
      },
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="h-fit flex flex-col space-y-32">
      <canvas ref={chartRef} width={400} height={200}></canvas>
      <div className="flex flex-col items-start">
       <div className="flex flex-row items-center space-x-4">
        <div className="h-4 w-4 rounded-full bg-gray-700"></div>
        <label htmlFor="">Available (200)</label>
       </div>
       <div className="flex flex-row items-center space-x-4">
        <div className="h-4 w-4 rounded-full bg-[#01AD8E]"></div>
        <label htmlFor="">Sold (300)</label>
       </div>
       <div className="flex flex-row items-center space-x-4">
        <div className="h-4 w-4 rounded-full bg-[#C02626]"></div>
        <label htmlFor="">In Transit (500)</label>
       </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
