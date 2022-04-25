import React, {Component} from "react";

import Modal from "../../componets/Modal/Modal";

import BookApts from "../../componets/Appointments/BookApts";
import ApproveRegistrations from "../../componets/ApproveRegistrations/ApproveRegistrations";
import AddBusiness from "../../componets/AddBusiness/AddBusiness";

import MoveoutData from "../../componets/ApproveRegistrations/moveouts.json"
import RegistrationData from "../../componets/ApproveRegistrations/table_mock.json"
import EventList from "../../componets/ApproveRegistrations/event_list.json"
import DiscountList from "../../componets/ApproveRegistrations/discount_list.json"

import styles from "./inspecdash.module.css";
import AddDiscount from "../../componets/AddDiscounts/AddDiscount";
import NavBar from "../../componets/NavBar/NavBar";
import {getAllDiscounts, getMoveOuts, getUsers} from "../../componets/utils/Services";
import utils from "../../componets/utils/Utilities";
import MoveOuts from "../../componets/MoveOuts/MoveOuts";
import Discounts from "../../componets/Discounts/Discounts";

class InspecDashboard extends Component {
    state = {
        active: "",
        showEditModal: false,
        bookingType: "",
        tableData: null,
    };

    handleaccordion = (e) => {
        this.setState({tableData: null})
        let clicked = e.currentTarget.id;
        if (this.state.active === clicked) {
            this.setState({active: ""});
        } else {
            this.setState({active: clicked});
            this.loadSectionData(clicked);
        }
    };

    loadSectionData(clicked) {
        switch (clicked) {
            case "first": {
                this.loadMoveOuts();
                break;
            }
            case "second": {
                this.loadUsers();
                break;
            }
            case "fifth": {
                this.loadDiscounts();
                break;
            }
            default:
                console.error("Error Unknown component");
        }
    }

    loadMoveOuts() {
        getMoveOuts('').then(response => {
            let data = response.data.message.map(d => {
                return {
                    "id": d["id"],
                    "First Name": d["fname"],
                    "Last Name": d["lname"],
                    "Birth Place": d["birth_place"],
                    "Address": d["address"],
                    "Apartment Number": d["apt_no"],
                    "Requested Date": d["created_on"],
                    "Reason": d["comments"],
                    "Role": utils.getUserRoleBasedOnCode(d["user_role"]),
                    "Approved": (d["is_approved"]==='1' ? "Yes" : "No")
                }
            })
            this.setState({tableData: data})
        });
    }

    loadUsers() {
        getUsers().then(response => {
            let data = response.data.message.map(d => {
                return {
                    "id": d["user_id"],
                    "First Name": d["fname"],
                    "Last Name": d["lname"],
                    "Birth Place": d["birth_place"],
                    "D.O.B.": d["dob"],
                    "Address": d["address"],
                    "Apartment Number": d["apt_no"],
                    "Email": d["email"],
                    "Proof": d["proof_url"],
                    "Role": d["user_role"],
                    "Active": d["is_active"] === '1'
                }
            })
            this.setState({tableData: data})
        });
    }

    loadDiscounts() {
        getAllDiscounts().then(response => {
            let data = response.data.message.map(d => {
                return {
                    "id": d["id"],
                    "Coupon Code": d["name"],
                    "Discounts on Events": d["events_rate"] + '%',
                    "Discounts on Schools": d["ferrys_rate"] + '%',
                    "Discounts on Ferries": d["flights_rate"] + '%',
                    "Discounts on Clinics": d["clinics_rate"] + '%',
                    "Discounts on Flights": d["schools_rate"] + '%',
                    "Active": d["is_active"]
                }
            })
            this.setState({tableData: data})
        });
    }

    openEditModal = (type) => {
        this.setState({
            bookingType: type,
            showEditModal: true,
        });
    };

    closeEditModal = () => {
        this.setState({showEditModal: false});
    };

    render() {
        const modalWindowType = () => {
            if (this.state.bookingType === "apts") {
                return <AddBusiness/>;
            } else if (this.state.bookingType === "discounts") {
                return <AddDiscount/>;
            }
        };
        return (
            <div>
                <NavBar/>
                <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                    {modalWindowType()}
                </Modal>
                <div className={styles.accordion}>
                    <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>Manage Move Outs</div>
                        {/* <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "apts")}>
                                    Book Appointment
                                </button>
                            </div> */}
                        <div className={`${styles.col_5} ${styles.expandbttn}`}>
                            <button id="first" onClick={this.handleaccordion}>
                                {this.state.active ? "-" : "+"}
                            </button>
                        </div>
                        <div
                            className={`${
                                this.state.active === "first"
                                    ? `${styles.expand}`
                                    : `${styles.content}`
                            }`}
                        >
                            {this.state.tableData ? (
                                <MoveOuts data={this.state.tableData}/>) : utils.getProgressCircle()}
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>Manage SIREMAR Residents</div>
                        {/* <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "apts")}>
                                    Book Appointment
                                </button>
                            </div> */}
                        <div className={`${styles.col_5} ${styles.expandbttn}`}>
                            <button id="second" onClick={this.handleaccordion}>
                                {this.state.active ? "-" : "+"}
                            </button>
                        </div>
                        <div
                            className={`${
                                this.state.active === "second"
                                    ? `${styles.expand}`
                                    : `${styles.content}`
                            }`}
                        >
                            {this.state.tableData ? (
                                <ApproveRegistrations data={this.state.tableData}/>) : utils.getProgressCircle()}
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>Inspect SIREMAR Residents</div>
                        {/* <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "apts")}>
                                    Book Appointment
                                </button>
                            </div> */}
                        <div className={`${styles.col_5} ${styles.expandbttn}`}>
                            <button id="third" onClick={this.handleaccordion}>
                                {this.state.active ? "-" : "+"}
                            </button>
                        </div>
                        <div
                            className={`${
                                this.state.active === "third"
                                    ? `${styles.expand}`
                                    : `${styles.content}`
                            }`}
                        >
                            <ApproveRegistrations data={RegistrationData}/>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>Manage Businesses</div>
                        <div className={[styles.col_25]}>
                            <button onClick={this.openEditModal.bind(this, "apts")}>
                                Add Business
                            </button>
                        </div>
                        <div className={`${styles.col_5} ${styles.expandbttn}`}>
                            <button id="fourth" onClick={this.handleaccordion}>
                                {this.state.active ? "-" : "+"}
                            </button>
                        </div>
                        <div
                            className={`${
                                this.state.active === "fourth"
                                    ? `${styles.expand}`
                                    : `${styles.content}`
                            }`}
                        >
                            <ApproveRegistrations data={EventList}/>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>Manage Discounts</div>
                        <div className={[styles.col_25]}>
                            <button onClick={this.openEditModal.bind(this, "discounts")}>
                                Add Discounts
                            </button>
                        </div>
                        <div className={`${styles.col_5} ${styles.expandbttn}`}>
                            <button id="fifth" onClick={this.handleaccordion}>
                                {this.state.active ? "-" : "+"}
                            </button>
                        </div>
                        <div
                            className={`${
                                this.state.active === "fifth"
                                    ? `${styles.expand}`
                                    : `${styles.content}`
                            }`}
                        >
                            {this.state.tableData ? (
                                <Discounts data={this.state.tableData}/>) : utils.getProgressCircle()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InspecDashboard;
