import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Assuming Chart.js is installed
import chartData from '../data.json';

const Barchart = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar', // Chart type (bar in this case)
      data: {
        labels: chartData.map((data) => data.month),
        datasets: [
          {
            label: 'Income',
            data: chartData.map((data) => data.income),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Expense',
            data: chartData.map((data) => data.expense),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          // Add datasets for soldTransit and soldRemainder if needed
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [chartData]);

  return <canvas ref={chartRef} width={600} height={400} />;
};

export default Barchart;
