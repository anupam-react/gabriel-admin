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

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

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
      label: "Total Sales",
      data: [200, 400, 500, 300, 600, 500, 700],
      backgroundColor: "#FD575B",
    },
  ],
};

export function BarChart3() {
  return <Bar options={options} data={data} />;
}
