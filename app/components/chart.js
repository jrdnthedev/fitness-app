import Component from '@glimmer/component';

export default class ChartComponent extends Component {
  chartOptions = {
    chart: {
      type: 'line',
      style: {
        fontFamily: 'sans-serif',
        width: '100%',
      },
    },
    title: {
      text: 'Week 1',
    },
    xAxis: {
      type: 'categories',
      categories: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      title: {
        text: 'Total',
      },
    },
  };

  chartData = [
    {
      name: 'Push Ups',
      data: [104, 110, 100, 105, 138, 167, 200],
    },
    {
      name: 'Flower',
      data: [66, 25, 55, 105, 38, 76, 43],
    },
    {
      name: 'Dips',
      data: [86, 65, 50, 105, 120, 107, 30],
    },
    {
      name: 'burpees',
      data: [50, 70, 70, 85, 98, 97, 40],
    },
  ];
}
