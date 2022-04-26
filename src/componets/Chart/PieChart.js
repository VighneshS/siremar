import React, {Component} from 'react';
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = props.chartData;
        this.title = props.title;
    }

    render() {
        return (
                <Pie style={styles} data={this.chartData}/>
        );
    }
}

const styles = {
    pieContainer: {
        width: "40%",
        height: "40%",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)"
    },
    relative: {
        position: "relative"
    }
};

PieChart.propTypes = {};

export default PieChart;
