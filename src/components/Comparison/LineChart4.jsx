import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "COUPONS",
  "CREATE AN OFFER",
  "PERCENTAGE DISCOUNT",
  "BUY 1 GET 1 FREE",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Return on Ads Spend (ROAS)",
      data: [60, 40, 70, 20],
      borderColor: "#FEA82F",
      backgroundColor: "#FEA82F",
    },
    {
      label: "Campaign Type",
      data: [30, 50, 40, 70],
      borderColor: "#FD575B",
      backgroundColor: "#FD575B",
    },
  ],
};

export function LineChart4() {
  return <Line options={options} data={data} />;
}
