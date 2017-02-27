import React from 'React'
import Chart from './Chart';

let options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Ideal Asset Allocation'
    },
    plotOptions: {
        pie: {
            borderColor: '#000000',
            innerSize: '60%'
        }
    },
    series: [{
        data: [
            ['Large Cap Stocks', 23],
            ['Mid/Small Cap Stocks', 23],
            ['International Stocks', 11],
            ['Bonds', 32],
            ['Cash', 11]
        ]
    }]
};

export default class DonutChart extends React.Component {
    render() {
        return <Chart container="chart" options={options} />
    }
}