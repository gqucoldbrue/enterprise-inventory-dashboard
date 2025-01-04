'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    product: string;
    current: number;
    minimum: number;
    predicted: number;
  }[];
}

export const BarChart = ({ data }: BarChartProps) => {
  const chartData = {
    labels: data.map(item => item.product),
    datasets: [
      {
        label: 'Current Stock',
        data: data.map(item => item.current),
        backgroundColor: 'rgb(59, 130, 246)',
      },
      {
        label: 'Minimum Stock',
        data: data.map(item => item.minimum),
        backgroundColor: 'rgb(239, 68, 68)',
      },
      {
        label: 'Predicted Stock',
        data: data.map(item => item.predicted),
        backgroundColor: 'rgb(34, 197, 94)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};