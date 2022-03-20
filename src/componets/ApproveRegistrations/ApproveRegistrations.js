import React, {Component} from 'react';
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import data from "./table_mock.json"
import "./ApproveRegistrations.module.css"

export default class ApproveRegistrations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: data,
            tableData: {
                data: data,
                metadata: {
                    styles: [{column: "Active", styleFunction: RenderBadge}]
                }
            },
            showEditModal: false,
            editModelData: {}
        };
        this.actions = [{
            "action": "View", "callBack": this.handleEditCallBack
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
        this.state.users.forEach(u => {
            if (u.id === user.id) {
                u["Active"] = true;
            }
        });
        this.closeEditModal();
        this.openEditModal(user);
    }

    render() {
        return (<div>
            <h1>Approve Registrations</h1>
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
                    disabled = {this.state.editModelData["Active"]}
                    onClick={(e) => this.approveAndActivateUser(e, this.state.editModelData)}>
                    {!this.state.editModelData["Active"] ? "Approve" : "Approved"}
                </button>
            </Modal>
        </div>);
    }
}

const RenderBadge = (props: { value: * }) => {
    if (props.value) {
        return <span className="badge green">Active</span>;
    } else {
        return <span className="badge red">In Active</span>;
    }
}
