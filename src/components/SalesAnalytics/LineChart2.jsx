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

const labels = ['BEVERAGES', 'SHOES', 'PHONES', 'ELECTRONICS', 'FOOD'];

export const data = {
  labels,
  datasets: [
    {
      label: 'SALES',
      data: [100, 200, 300 , 500 , 400],
      borderColor: '#FEA82F',
      backgroundColor: '#FEA82F',
    },
    {
      label: 'OLD CUSTOMERS',
      data: [100, 300, 500, 400 , 200],
      borderColor: '#0070BC',
      backgroundColor: '#0070BC',
    },
    {
      label: 'OLD CUSTOMERS',
      data: [100, 400, 200, 300 , 500],
      borderColor: '#FD575B',
      backgroundColor: '#FD575B',
    },
  ],
};

export function LineChart2() {
  return <Line options={options} data={data} />;
}
