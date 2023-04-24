import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import styles from './styles/HomeChart.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Filler);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  point: { radius: 0 },
  layout: {
    padding: {
      left: 34,
      right: 34,
      top: 16,
      bottom: 16
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Active users this week',
      font: { size: 24 },
      color: '#09090A',
      align: 'start',
      padding: {
        top: 10,
        bottom: 30
      }
    }
  },
  scales: {
    x: { grid: { display: false }, beginAtZero: true },
    y: { grid: { display: false }, beginAtZero: true }
  }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const fake = [5, 2, 3, 2, 5, 6, 3];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: fake,
      borderColor: '#C8BCF6',
      backgroundColor: 'rgba(200,188,246,0.3)',
      pointRadius: 0
    }
  ]
};

const HomeChart = (): JSX.Element => {
  return (
    <div className={styles.chart__wrapper}>
      <Line options={options} data={data} />
    </div>
  );
};

export default HomeChart;
