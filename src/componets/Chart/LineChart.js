import React, {Component} from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = props.chartData;
        this.title = props.title;
    }

    render() {
        return (
                <Line data={this.chartData}/>
        );
    }
}

LineChart.propTypes = {};

export default LineChart;
