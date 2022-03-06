import React, { Component } from "react";
import Modal from "../componets/Modal/Modal";

import BookFlights from "../componets/Flight/BookFlights";
import BookFerry from "../componets/Ferry/BookFerry";
import BookApts from "../componets/Appointments/BookApts";
import RegisterOut from "../componets/Moveout/RegisterOut";
import CourseRegister from "../componets/CourseRegistration/Enrollment";

import styles from "./userdashboard.module.css";

class UserDashboard extends Component {
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

    modalWindowType = () => {};

    render() {
        const modalWindowType = () => {
            if (this.state.bookingType === "flight") {
                return <BookFlights />;
            } else if (this.state.bookingType === "ferry") {
                return <BookFerry />;
            } else if (this.state.bookingType === "apts") {
                return <BookApts />;
            } else if (this.state.bookingType === "moveouts") {
                return <RegisterOut />;
            } else if (this.state.bookingType === "course"){
                return <CourseRegister />;
            } else {
                return ""
            }
        };
        return (
            <div>
                <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                    {modalWindowType()}
                </Modal>
                <div className={styles.accordion_body}>
                    <div className={styles.accordion}>
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>
                                Flight Bookings
                            </div>
                            <div className={styles.col_25}>
                                <button onClick={this.openEditModal.bind(this, "flight")}>
                                    Book Ticket
                                </button>
                            </div>
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
                                <table className={styles.roottable}>
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>Ferry Bookings</div>
                            <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "ferry")}>
                                    Book Ticket
                                </button>
                            </div>
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
                                <table className={styles.roottable}>
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>
                                Clinic Appointment Bookings
                            </div>
                            <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "apts")}>
                                    Book Appointment
                                </button>
                            </div>
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
                                <table className={styles.roottable}>
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>
                                Register Move Out
                            </div>
                            <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "moveouts")}>
                                    Submit Request
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
                                <table className={styles.roottable}>
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.container}>
                        <div className={`${styles.col_50} ${styles.title}`}>
                                Course Enrollment
                            </div>
                            <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "course")}>
                                    Enroll
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
                                <table className={styles.roottable}>
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;
