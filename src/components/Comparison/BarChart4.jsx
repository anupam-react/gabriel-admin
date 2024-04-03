import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Hot Chocolate", "Coffee", "Wine", "Tea", "Cake"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Products",
      data: [200, 400, 300, 500, 400],
      backgroundColor: ["#4472C4", "#ED7D31", "#00B0F0", "#7030A0", "#00B050"],
    },
  ],
};

export function BarChart4() {
  return <Bar options={options} data={data} />;
}
