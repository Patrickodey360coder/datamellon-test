import React, { useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

function Chart({sales}) {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Datamellon Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }],
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }
  const [data, setData] = useState(chartData);
  return (
    <div>
      This is the chart
      {console.log(typeof sales)}
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'SkyHigh Companies',
            fontSize: 50
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}

export default Chart
