import React, {Component} from 'react';
import TableComponent from "../Table/TableComponent";
import Modal from "../Modal/Modal";
import classes from "./Discounts.module.css"
import utils from "../utils/Utilities";
import {approveMoveOut, approveUser, deleteDiscount} from "../utils/Services";
import AddDiscount from "../AddDiscounts/AddDiscount";
import {faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class Discounts extends Component {

    constructor(props) {
        super(props);
        let users = props.data ? props.data : [];
        this.callBack = props.callBack
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
            "action": "Edit", icon: faPencil, "callBack": this.handleEditCallBack,
        },{
            "action": "Delete", icon: faTrash, "callBack": this.handleDeleteDiscount,
        }
    ]
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
    }

    openEditModal = (row) => {
        if (row) {
            let data = {
                id: row.id,
                discount_code: row["Coupon Code"],
                events_rate: row["Discounts on Events"],
                ferry_rate: row["Discounts on Ferries"],
                flight_rate: row["Discounts on Flights"],
                clinic_rate: row["Discounts on Clinics"],
                school_rate: row["Discounts on Schools"],
                is_active: row["Active"]
            }
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
        utils.reloadSection(this.callBack.current);
        this.setState({showEditModal: false});
        this.setState({editModelData: null});
    };

    handleEditCallBack = (e, row) => {
        this.openEditModal(row)
    }

    handleDeleteDiscount = (e, row) => {
        deleteDiscount(row.id).then(r => {
            utils.reloadSection(this.callBack.current)
        })
    }

    render() {
        return (<div>
            {/* <h1>Approve Registrations</h1> */}
            <TableComponent data={this.state.tableData} actions={this.actions}/>
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
