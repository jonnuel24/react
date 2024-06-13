import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  let myChart = null; // Variable to store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create the chart
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Price",
            data: [100, 150, 200, 250, 300, 350, 400, 100, 150, 200, 250, 300], // Dummy price data
            backgroundColor:
              "rgba(106, 189, 69)",

            borderWidth: 1,
            borderRadius: 25,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Price",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
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
    <div className="h-fit">
      <h4>Bar Chart: Price vs Month</h4>
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );
};

export default BarChart;
