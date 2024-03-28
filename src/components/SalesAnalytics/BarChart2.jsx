import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12', ];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
   
  },
};

export const data = {
  labels,
  datasets: [
      {
      label: 'OUTLETS ',
      data:[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0] ,
      backgroundColor:'#FEA82F'
    },
  ],
};

export function BarChart2() {
  return <Bar options={options} data={data} />;
}
