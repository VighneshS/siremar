import React, {Component} from 'react';
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import data from "./table_mock.json"
import "./ApproveRegistrations.css"

export default class ApproveRegistrations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: data, showEditModal: false, editModelData: {}, selectedUsers: []
        };
        this.actions = [{
            "action": "View", "callBack": this.handleEditCallBack
        }]
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }

    openEditModal = (user) => {
        console.log(this.state.selectedUsers);
        this.setState({editModelData: user});
        this.setState({showEditModal: true});
    };

    closeEditModal = () => {
        this.setState({showEditModal: false});
    };

    handleEditCallBack = (e, row) => {
        console.log(e, row);
        this.openEditModal(row)
    }

    render() {
        return (<div>
            <h1>Approve Registrations</h1>
            <Table data={this.state.users} selectedUsers={this.state.selectedUsers}
                   actions={this.actions}/>
            <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                <h2>View User</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.editModelData.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.editModelData.lname}</td>
                    </tr>
                    <tr>
                        <td>Birth Place</td>
                        <td>{this.state.editModelData.birth_place}</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>{this.state.editModelData.dob}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{this.state.editModelData.address}</td>
                    </tr>
                    <tr>
                        <td>Apt. No.</td>
                        <td>{this.state.editModelData.apt_no}</td>
                    </tr>
                    <tr>
                        <td>Email ID</td>
                        <td>{this.state.editModelData.email}</td>
                    </tr>
                    <tr>
                        <td>Proof</td>
                        <td>{this.state.editModelData.proof_url}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{this.state.editModelData.user_role}</td>
                    </tr>
                    <tr>
                        <td>Active</td>
                        <td><RenderBadge value={this.state.editModelData.is_active}/></td>
                    </tr>
                    </tbody>
                </table>
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
