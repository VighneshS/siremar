import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = props.chartData;
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
