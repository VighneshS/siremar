import React, {Component} from 'react';
import users from "../../data/users.json"
import classes from "./AdminDashboard.module.css"
import Card from "../Card/Card";
import Chart from "../Chart/Chart";


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
                        "#ecf0f1"
                    ]
                }
            ]
        };
    }
    totalNumberOfUsers = users.length
    totalNumberOfUsersByRole = this.groupArray(users, ["Role"]);
    chartData = this.groupUsersByCreatedYear(users);

    render() {
        return (
            <div>
                <h1>Admin Dashboard</h1>
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
                {/*<div>
                    <div><strong>Users Enrolled over the years</strong></div>
                    <Chart chartData={this.chartData} title={"Users Enrolled over the years"} />
                </div>*/}

            </div>
        );
    }
}
