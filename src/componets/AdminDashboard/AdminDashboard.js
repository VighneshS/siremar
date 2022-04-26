import React, {Component} from 'react';
import classes from "./AdminDashboard.module.css"
import Card from "../Card/Card";
import BarChart from "../Chart/BarChart";
import LineChart from "../Chart/LineChart";
import utils from "../utils/Utilities";
import NavBar from "../NavBar/NavBar";
import {getAllTickets, getUsers} from "../utils/Services";
import PieChart from "../Chart/PieChart";


export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            totalNumberOfUsers: null,
            totalNumberOfUsersByRole: null,
            chartCreatedOnData: null,
            chartDOBData: null,
            isLoaded: false,

        }
    }

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

    loadUsers() {
        getUsers().then(response => {
            let data = response.data.message.map(d => {
                return {
                    "id": d["user_id"],
                    "First Name": d["fname"],
                    "Last Name": d["lname"],
                    "Birth Place": d["birth_place"],
                    "DOB": d["dob"],
                    "Address": d["address"],
                    "Apartment Number": d["apt_no"],
                    "Email": d["email"],
                    "Proof": d["proof_url"],
                    "Role": utils.getUserRoleBasedOnCode(d["user_role"]),
                    "Active": d["is_active"] === '1',
                    "Created On": d["created_at"]
                }
            })
            this.getAllServicesCount().then(response => {
                let ferryCount = 0
                let flightCount = 0
                if (response[0].value.data) {
                    flightCount = response[0].value.data.message.length
                }
                if (response[1].value.data) {
                    ferryCount = response[1].value.data.message.length
                }
                let counts = [flightCount, ferryCount]
                console.log(counts);
                let serviceData = {
                    labels: [utils.FLIGHT, utils.FERRY],
                    datasets: [
                        {
                            label: "Amount of Services",
                            data: counts,
                            backgroundColor: [
                                "#ffbb11",
                                "rgba(0,198,168,0.69)"
                            ]
                        }
                    ]
                };
                this.setState({users: data})
                this.setState({
                    totalNumberOfUsers: this.state.users.length,
                    totalNumberOfUsersByRole: this.groupArray(this.state.users, ["Role"]),
                    chartCreatedOnData: this.groupUsersByCreatedYear(this.state.users),
                    chartDOBData: this.groupUsersByDateOfBirth(this.state.users),
                    chartServicesData: serviceData,
                })
                this.setState({isLoaded: true});
            })
        });
    }

    getAllServicesCount = () => {
        return Promise.allSettled([
            getAllTickets(utils.FLIGHT).then(),
            getAllTickets(utils.FERRY).then()
        ])
    }

    groupUsersByCreatedYear = (arr = []) => {
        let groups = arr.reduce((groups, user) => {
            if (user["Created On"]) {
                const date = user["Created On"].split(' ')[0].split('-')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(user);
            }
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


    groupUsersByDateOfBirth = (arr = []) => {
        let groups = arr.reduce((groups, user) => {
            if (user["DOB"]) {
                const date = user["DOB"].split('-')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(user);
            }
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
                        "#85ec00"
                    ]
                }
            ]
        };
    }

    componentDidMount() {
        this.loadUsers()
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <NavBar pages={[{name: "Dashboard", redirect: "/admin/dashboard"}, {
                        name: "Services",
                        redirect: "/admin/services"
                    }]}/>
                    <div className={classes.fixed_header}>
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className={classes.scroll}>
                        <div className={classes.cards}>
                            <Card title={"Number of Users"}>
                                <span>{this.state.totalNumberOfUsers}</span>
                            </Card>
                            <Card title={"Number of Residents"}>
                                <span>{this.state.totalNumberOfUsersByRole.Role.Resident.length}</span>
                            </Card>
                            <Card title={"Number of Inspector"}>
                                <span>{this.state.totalNumberOfUsersByRole.Role.Inspector.length}</span>
                            </Card>
                            <Card title={"Number of Admin"}>
                                <span>{this.state.totalNumberOfUsersByRole.Role.Admin.length}</span>
                            </Card>
                        </div>
                        <div className={classes.chart_cards}>
                            <Card title={"Users Enrolled over the years"}>
                                <BarChart chartData={this.state.chartCreatedOnData} title={"Users Enrollments"}/>
                            </Card>
                        </div>
                        <div className={classes.chart_cards}>
                            <Card title={"Users Grouped by Age"}>
                                <LineChart chartData={this.state.chartDOBData} title={"Users Enrollments"}/>
                            </Card>
                        </div>
                        <div className={classes.chart_cards}>
                            <Card title={"Users Grouped by Age"}>
                                <PieChart chartData={this.state.chartServicesData} title={"Users Enrollments"}/>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        return utils.getProgressCircle();
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
