import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import doughnutLabel from 'chartjs-plugin-doughnutlabel';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Rejected', 'Accepted'],
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 50],
      backgroundColor: [
        '#E30325',
        '#449352',
      ],
      hoverBackgroundColor: [
      'darkred', 
      'darkgreen'
    ],
    //   borderColor: [
        // 'rgba(255, 159, 64, 1)',
    //   ],
    //   borderWidth: 1, 
    },
  ],
};

const options = {
    plugins: {
      legend: {
        position: 'bottom',
        // display: 'false',
      },
    //   doughnutLabel: {
    //     labels: [
    //       {
    //         text: 'My Label',
    //         font: {
    //           size: 20,
    //         },
    //       },
    //     ],
    //   },
    },
  };

export default function DonuChart() {
  return (
    <Doughnut 
    data={data} 
    options={options}
    />
    );
}
