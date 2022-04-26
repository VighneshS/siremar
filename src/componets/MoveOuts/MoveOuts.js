import React, {Component} from 'react';
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import classes from "./MoveOuts.module.css"
import utils from "../utils/Utilities";
import {approveMoveOut, approveUser} from "../utils/Services";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export default class MoveOuts extends Component {

    constructor(props) {
        super(props);
        let users = props.data ? props.data : [];
        this.state = {
            users: props.data,
            tableData: {
                data: users,
                metadata: {
                    styles: [{column: "Approved", styleFunction: RenderBadge}, {
                        column: "Proof",
                        styleFunction: RenderURL
                    }]
                }
            },
            showEditModal: false,
            editModelData: {}
        };
        this.actions = [{
            "action": "View", icon: faEye, "callBack": this.handleEditCallBack
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

    approveMoveOut = (e, user) => {
        approveMoveOut(user.id).then(response => {
            if (response.data) {
                this.state.users.forEach(u => {
                    if (u.id === user.id) {
                        u["Approved"] = 'Yes';
                    }
                });
                this.closeEditModal();
                this.openEditModal(user);
            }
        })
    }

    render() {
        return (<div>
            {/* <h1>Approve Registrations</h1> */}
            <Table data={this.state.tableData} actions={this.actions}/>
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
                        <td>Address</td>
                        <td>{this.state.editModelData["Address"]}</td>
                    </tr>
                    <tr>
                        <td>Apt. No.</td>
                        <td>{this.state.editModelData["Apartment Number"]}</td>
                    </tr>
                    <tr>
                        <td>Requested Date</td>
                        <td>{this.state.editModelData["Requested Date"]}</td>
                    </tr>
                    <tr>
                        <td>Reason</td>
                        <td>{this.state.editModelData["Reason"]}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{this.state.editModelData["Role"]}</td>
                    </tr>
                    <tr>
                        <td>Approved</td>
                        <td><RenderBadge value={this.state.editModelData["Approved"]}/></td>
                    </tr>
                    </tbody>
                </table>
                <button
                    disabled={getIsApproved(this.state.editModelData["Approved"])}
                    onClick={(e) => this.approveMoveOut(e, this.state.editModelData)}>
                    {!getIsApproved(this.state.editModelData["Approved"]) ? "Approve" : "Approved"}
                </button>
            </Modal>
        </div>);
    }
}
const getIsApproved = (data) => {
    return data === 'Yes';
}

const RenderBadge = (props: { value: * }) => {
    if (getIsApproved(props.value)) {
        return <td className={`${classes.no_border}`} key={utils.getRandomUniqueId()}><span className={`${classes.badge} ${classes.green}`}>Yes</span>
        </td>;
    } else {
        return <td className={`${classes.no_border}`} key={utils.getRandomUniqueId()}><span className={`${classes.badge} ${classes.red}`}>No</span>
        </td>;
    }
}

const RenderURL = (props: { value: * }) => {
    return <td className={classes.url} key={utils.getRandomUniqueId()}>{props.value}</td>
}
