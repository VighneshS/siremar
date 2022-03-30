import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

/*const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}*/

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = props.chartData;
        console.log(this.chartData);
        this.title = props.title;
    }

    render() {
        return (
                <Bar data={this.chartData}/>
        );
    }
}

BarChart.propTypes = {};

export default BarChart;
