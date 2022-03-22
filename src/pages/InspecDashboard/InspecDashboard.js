import React, { Component } from "react";

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

class InspecDashboard extends Component {
    state = {
        active: "",
        showEditModal: false,
        bookingType: "",
    };

    handleaccordion = (e) => {
        let clicked = e.currentTarget.id;
        console.log(clicked);
        if (this.state.active === clicked) {
            this.setState({ active: "" });
        } else {
            this.setState({ active: clicked });
        }
    };

    handleBooking = (type) => {
        console.log(type);
    };

    openEditModal = (type) => {
        this.setState({
            bookingType: type,
            showEditModal: true,
        });
    };

    closeEditModal = () => {
        this.setState({ showEditModal: false });
    };
    render() {
        const modalWindowType = () => {
            if (this.state.bookingType === "apts") {
                return <AddBusiness />;
            } else if (this.state.bookingType === "discounts"){
                return <AddDiscount /> ;
            }
        };
        return (
            <div>
                <NavBar />
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
                            <ApproveRegistrations data={MoveoutData}/>
                        </div>
                    </div>
                    <hr />
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
                            <ApproveRegistrations data={RegistrationData}/>
                        </div>
                    </div>
                    <hr />
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
                    <hr />
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
                    <hr />
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
                            <ApproveRegistrations data={DiscountList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InspecDashboard;
