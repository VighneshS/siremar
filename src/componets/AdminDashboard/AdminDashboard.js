import React, {Component} from 'react';
import users from "../../data/users.json"
import classes from "./AdminDashboard.module.css"
import Card from "../Card/Card";
import BarChart from "../Chart/BarChart";
import Table from "../Table/Table";
import utils from "../utils/Utilities";
import NavBar from "../NavBar/NavBar";


export default class AdminDashboard extends Component {

    groupArray = (arr = [], columns = []) => {
        let fields = {}
        for (const columnsKey in columns) {
            let column = columns[columnsKey]
            fields[column] = arr.reduce(function (r, a) {
                r[a[column]] = r[a[column]] || [];
                r[a[column]].push(a);
                return r;
            }, Object.create(null));
        }
        return fields;
    };
    groupUsersByCreatedYear = (arr = []) => {
        let groups = arr.reduce((groups, user) => {
            const date = user["Created On"].split('T')[0].split('-')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(user);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                count: groups[date].length
            };
        });

        return {
            labels: groupArrays.map((data) => data.date),
            datasets: [
                {
                    label: "User Count",
                    data: groupArrays.map((data) => data.count),
                    backgroundColor: [
                        "#ffbb11",
                        "#ffbb11"
                    ]
                }
            ]
        };
    }
    data = users.slice(0,10)
    totalNumberOfUsers = users.length
    totalNumberOfUsersByRole = this.groupArray(users, ["Role"]);
    chartData = this.groupUsersByCreatedYear(users);
    tableData: {
        data: data,
        metadata: {
            styles: [{column: "Active", styleFunction: RenderBadge}, {
                column: "Proof",
                styleFunction: RenderURL
            }]
        }
    }

    render() {
        console.log(this.data);
        return (
            <div>
                <NavBar />
                <div className={classes.fixed_header}>
                    <h1>Admin Dashboard</h1>
                </div>
                <div className={classes.scroll}>
                    <div className={classes.cards}>
                        <Card title={"Number of Users"}>
                            <span>{this.totalNumberOfUsers}</span>
                        </Card>
                        <Card title={"Number of Residents"}>
                            <span>{this.totalNumberOfUsersByRole.Role.Resident.length}</span>
                        </Card>
                        <Card title={"Number of Inspector"}>
                            <span>{this.totalNumberOfUsersByRole.Role.Inspector.length}</span>
                        </Card>
                        <Card title={"Number of Admin"}>
                            <span>{this.totalNumberOfUsersByRole.Role["Super Admin"].length}</span>
                        </Card>
                        <Card title={"Users Currently Loged in"}>
                            <span>50</span>
                        </Card>
                    </div>
                    <div className={classes.chart_cards}>
                        <Card title={"Users Enrolled over the years"}>
                            <BarChart chartData={this.chartData} title={"Users Enrollments"}/>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

const RenderBadge = (props: { value: * }) => {
    if (props.value) {
        return <td key={utils.getRandomUniqueId()}><span className={`${classes.badge} ${classes.green}`}>Active</span>
        </td>;
    } else {
        return <td key={utils.getRandomUniqueId()}><span className={`${classes.badge} ${classes.red}`}>In Active</span>
        </td>;
    }
}

const RenderURL = (props: { value: * }) => {
    return <td className={classes.url} key={utils.getRandomUniqueId()}>{props.value}</td>
}
