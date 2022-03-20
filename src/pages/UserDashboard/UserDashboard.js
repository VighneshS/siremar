import React, { Component } from "react";
import Modal from "../../componets/Modal/Modal";

import BookFlights from "../../componets/Flight/BookFlights";
import BookFerry from "../../componets/Ferry/BookFerry";
import BookApts from "../../componets/Appointments/BookApts";
import RegisterOut from "../../componets/Moveout/RegisterOut";
import CourseRegister from "../../componets/CourseRegistration/Enrollment";

import styles from "./userdashboard.module.css";
import DiscountRate from "../../componets/DiscountRate/DiscountRate";

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
            } else if (this.state.bookingType === "course") {
                return <CourseRegister />;
            } else {
                return "";
            }
        };
        return (
            <div>
                <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                    {modalWindowType()}
                </Modal>
                <DiscountRate />
                <div className={styles.col_100}></div>
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
                                            <th>Clinic Name</th>
                                            <th>Address</th>
                                            <th>Specialist</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ABC Clinic</td>
                                            <td>1025 E Mitchell Rd</td>
                                            <td>Dentist</td>
                                            <td>03-24-2022</td>
                                            <td>13:00</td>
                                        </tr>
                                        <tr>
                                            <td>ABC Clinic</td>
                                            <td>1025 E Mitchell Rd</td>
                                            <td>Dentist</td>
                                            <td>03-24-2022</td>
                                            <td>13:00</td>
                                        </tr>
                                        <tr>
                                            <td>ABC Clinic</td>
                                            <td>1025 E Mitchell Rd</td>
                                            <td>Dentist</td>
                                            <td>03-24-2022</td>
                                            <td>13:00</td>
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
                                            <th>Requested Date</th>
                                            <th>Moveout Date</th>
                                            <th>Reason</th>
                                            <th>Approval Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>03-14-2022</td>
                                            <td>03-22-2022</td>
                                            <td>Loren Ipsum</td>
                                            <td>PENDING</td>
                                        </tr>
                                        <tr>
                                        <td>03-14-2022</td>
                                            <td>03-22-2022</td>
                                            <td>Loren Ipsum</td>
                                            <td>PENDING</td>
                                        </tr>
                                        <tr>
                                        <td>03-14-2022</td>
                                            <td>03-22-2022</td>
                                            <td>Loren Ipsum</td>
                                            <td>PENDING</td>
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
                                            <th>Campus</th>
                                            <th>Course Name</th>
                                            <th>Section</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>SW Campus</td>
                                            <td>CSE 6324</td>
                                            <td>#2</td>
                                        </tr>
                                        <tr>
                                            <td>SW Campus</td>
                                            <td>CSE 6324</td>
                                            <td>#2</td>
                                        </tr>
                                        <tr>
                                            <td>SW Campus</td>
                                            <td>CSE 6324</td>
                                            <td>#2</td>
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
