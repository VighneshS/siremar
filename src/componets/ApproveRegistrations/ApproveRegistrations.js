import React, {Component} from 'react';
import TableComponent from "../Table/TableComponent";
import Modal from "../Modal/Modal";
import data from "../../data/users.json"
import classes from "./ApproveRegistrations.module.css"
import utils from "../utils/Utilities";
import {approveUser} from "../utils/Services";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export default class ApproveRegistrations extends Component {

    constructor(props) {
        super(props);
        let users = props.data ? props.data : [];
        this.state = {
            users: props.data,
            tableData: {
                data: users,
                metadata: {
                    styles: [{column: "Active", styleFunction: RenderBadge}, {
                        column: "Proof",
                        styleFunction: RenderURL
                    }]
                }
            },
            showEditModal: false,
            editModelData: {}
        };
        this.actions = [{
            "action": "View", "icon": faEye, "callBack": this.handleEditCallBack
        }]
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }

    openEditModal = (user) => {
        this.setState({editModelData: user});
        this.setState({showEditModal: true});
    };

    closeEditModal = () => {
        this.setState({showEditModal: false});
    };

    handleEditCallBack = (e, row) => {
        this.openEditModal(row)
    }

    approveAndActivateUser = (e, user) => {
        approveUser(user.id).then(response => {
            if (response.data) {
                this.state.users.forEach(u => {
                    if (u.id === user.id) {
                        u["Active"] = !user.Active;
                    }
                });
                this.closeEditModal();
                this.openEditModal(user);
            }
        })
    }

    render() {
        return (<div>
            <TableComponent data={this.state.tableData} actions={this.actions}/>
            <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                <h2>View User</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.editModelData["First Name"]}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.editModelData["Last Name"]}</td>
                    </tr>
                    <tr>
                        <td>Birth Place</td>
                        <td>{this.state.editModelData["Birth Place"]}</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>{this.state.editModelData["Date of Birth"]}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{this.state.editModelData["Address"]}</td>
                    </tr>
                    <tr>
                        <td>Apt. No.</td>
                        <td>{this.state.editModelData["Apartment Number"]}</td>
                    </tr>
                    <tr>
                        <td>Email ID</td>
                        <td>{this.state.editModelData["Email"]}</td>
                    </tr>
                    <tr>
                        <td>Proof</td>
                        <td>{this.state.editModelData["Proof"]}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{this.state.editModelData["Role"]}</td>
                    </tr>
                    <tr>
                        <td>Active</td>
                        <td><RenderBadge value={this.state.editModelData["Active"]}/></td>
                    </tr>
                    </tbody>
                </table>
                <button
                    onClick={(e) => this.approveAndActivateUser(e, this.state.editModelData)}>
                    {!this.state.editModelData["Active"] ? "Activate User?" : "Deactivate User?"}
                </button>
            </Modal>
        </div>);
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
