import React, {Component} from 'react';
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import classes from "./Discounts.module.css"
import utils from "../utils/Utilities";
import {approveMoveOut, approveUser} from "../utils/Services";
import AddDiscount from "../AddDiscounts/AddDiscount";

export default class Discounts extends Component {

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
            editModelData: null
        };
        this.actions = [{
            "action": "Edit", "callBack": this.handleEditCallBack
        }]
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }

    openEditModal = (row) => {
        if (row) {
            let data = {
                id: row.id,
                discount_code: row["Coupon Code"],
                events_rate: row["Discounts on Events"],
                school_rate: row["Discounts on Schools"],
                ferry_rate: row["Discounts on Ferries"],
                clinic_rate: row["Discounts on Clinics"],
                flight_rate: row["Discounts on Flights"],
                is_active: row["Active"]
            }
            console.log(data);
            this.setState({editModelData: data});
            this.setState({showEditModal: true});
        }
    };

    getModal = () => {
        if (this.state.editModelData) {
            return (<Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                <AddDiscount data={this.state.editModelData}/>
            </Modal>)
        }
        return null;
    }

    closeEditModal = () => {
        this.setState({showEditModal: false});
        this.setState({editModelData: null});
    };

    handleEditCallBack = (e, row) => {
        this.openEditModal(row)
    }

    render() {
        return (<div>
            {/* <h1>Approve Registrations</h1> */}
            <Table data={this.state.tableData} actions={this.actions}/>
            {this.getModal()}
        </div>);
    }
}
const getIsApproved = (data) => {
    return data === '1';
}

const RenderBadge = (props: { value: * }) => {
    if (getIsApproved(props.value)) {
        return <td className={`${classes.no_border}`} key={utils.getRandomUniqueId()}><span
            className={`${classes.badge} ${classes.green}`}>Yes</span>
        </td>;
    } else {
        return <td className={`${classes.no_border}`} key={utils.getRandomUniqueId()}><span
            className={`${classes.badge} ${classes.red}`}>No</span>
        </td>;
    }
}

const RenderURL = (props: { value: * }) => {
    return <td className={classes.url} key={utils.getRandomUniqueId()}>{props.value}</td>
}
