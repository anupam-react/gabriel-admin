import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


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
      position: 'top' ,
    },
  
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'NEW CUSTOMERS',
      data: [400, 340,470,500,800,900,400,500,800,900,400],
      borderColor: '#FEA82F',
      backgroundColor: '#FEA82F',
    },
    {
      label: 'OLD CUSTOMERS',
      data: [500, 440,430,540,870,700,450,800,700,850,450],
      borderColor: '#FD575B',
      backgroundColor: '#FD575B',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
