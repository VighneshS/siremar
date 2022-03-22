import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

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

class Chart extends Component {
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

Chart.propTypes = {};

export default Chart;
