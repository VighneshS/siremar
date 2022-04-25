import React, {Component} from "react";
import Modal from "../../componets/Modal/Modal";

import BookFlights from "../../componets/Flight/BookFlights";
import BookFerry from "../../componets/Ferry/BookFerry";
import BookApts from "../../componets/Appointments/BookApts";
import RegisterOut from "../../componets/Moveout/RegisterOut";
import CourseRegister from "../../componets/CourseRegistration/Enrollment";

import styles from "./userdashboard.module.css";
import DiscountRate from "../../componets/DiscountRate/DiscountRate";
import BookEvents from "../../componets/Events/BookEvents";
import NavBar from "../../componets/NavBar/NavBar";
import {getBookedTickets, getFlights, getMoveOuts, getUserAppointments} from "../../componets/utils/Services";
import utils from "../../componets/utils/Utilities";

class UserDashboard extends Component {
    state = {
        active: "",
        showEditModal: false,
        bookingType: "",
        tableData: null
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
                this.loadBookings(utils.FLIGHT);
                break;
            }
            case "second": {
                this.loadBookings(utils.FERRY);
                break;
            }
            case "third": {
                this.loadAppointments();
                break;
            }
            case "fourth": {
                this.loadMoveOuts();
                break;
            }
            default:
                console.error("Error Unknown component");
        }
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

    loadBookings(type) {
        getBookedTickets(type).then(response => {
            this.setState({tableData: response.data.message})
        });
    }

    loadAppointments() {
        getUserAppointments().then(response => {
            this.setState({tableData: response.data.message})
        });
    }

    loadMoveOuts() {
        getMoveOuts(utils.getCurrentUserId()).then(response => {
            this.setState({tableData: response.data.message})
        });
    }

    renderBookingsTable() {
        if (this.state.tableData) {
            return this.state.tableData.map((data) => {
                return (<tr key={utils.getRandomUniqueId()}>
                    <td>{data.source}</td>
                    <td>{data.destination}</td>
                    <td>{data.transport_id}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                </tr>)
            });
        }
        return utils.getProgressCircle();
    }

    renderAppointmentsTable() {
        if (this.state.tableData) {
            return this.state.tableData.map((data) => {
                return (<tr key={utils.getRandomUniqueId()}>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.specialist}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                </tr>)
            });
        }
        return utils.getProgressCircle();
    }

    renderMoveOuts() {
        if (this.state.tableData) {
            return this.state.tableData.map((data) => {
                return (<tr key={utils.getRandomUniqueId()}>
                    <td>{data.created_on}</td>
                    <td>{data.created_on}</td>
                    <td>{data.comments}</td>
                    <td>{data.is_approved ? 'APPROVED' : 'PENDING'}</td>
                </tr>)
            });
        }
        return utils.getProgressCircle();
    }

    renderCourseEnrollments() {
        if (this.state.tableData) {
            return this.state.tableData.map((data) => {
                return (<tr key={utils.getRandomUniqueId()}>
                    <td>{data.created_on}</td>
                    <td>{data.created_on}</td>
                    <td>{data.comments}</td>
                    <td>{data.is_approved ? 'APPROVED' : 'PENDING'}</td>
                </tr>)
            });
        }
        return utils.getProgressCircle();
    }

    componentDidMount() {
    }

    render() {
        const modalWindowType = () => {
            if (this.state.bookingType === "flight") {
                return <BookFlights/>;
            } else if (this.state.bookingType === "ferry") {
                return <BookFerry/>;
            } else if (this.state.bookingType === "apts") {
                return <BookApts/>;
            } else if (this.state.bookingType === "moveouts") {
                return <RegisterOut/>;
            } else if (this.state.bookingType === "course") {
                return <CourseRegister/>;
            } else if (this.state.bookingType === "events") {
                return <BookEvents/>;
            } else {
                return "";
            }
        };

        return (
            <div>
                <NavBar/>
                <Modal show={this.state.showEditModal} handleClose={this.closeEditModal}>
                    {modalWindowType()}
                </Modal>
                <DiscountRate/>
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
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Flight Number</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderBookingsTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr/>
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
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Ferry Number</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderBookingsTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr/>
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
                                    {this.renderAppointmentsTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr/>
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
                                    {this.renderMoveOuts()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr/>
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
                        <hr/>
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>Events</div>
                            {/* <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "events")}>
                                    Book Events
                                </button>
                            </div> */}
                            <div className={`${styles.col_5} ${styles.expandbttn}`}>
                                <button id="sixth" onClick={this.handleaccordion}>
                                    {this.state.active ? "-" : "+"}
                                </button>
                            </div>
                            <div
                                className={`${
                                    this.state.active === "sixth"
                                        ? `${styles.expand}`
                                        : `${styles.content}`
                                }`}
                            >
                                <table className={styles.roottable}>
                                    <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        <th>Venue</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>The Weekend Concert</td>
                                        <td>1142 E Mitchell Ave</td>
                                        <td>03-12-2022</td>
                                        <td>13:00</td>
                                        <td>
                                            <center>
                                                <button>Booked</button>
                                            </center>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AC DC Concert</td>
                                        <td>2452 W Mitchell Ave</td>
                                        <td>03-11-2022</td>
                                        <td>22:00</td>
                                        <td>
                                            <center>
                                                <button>Book</button>
                                            </center>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.container}>
                            <div className={`${styles.col_50} ${styles.title}`}>
                                SIREMAR Businesses
                            </div>
                            {/* <div className={[styles.col_25]}>
                                <button onClick={this.openEditModal.bind(this, "course")}>
                                    Enroll
                                </button>
                            </div> */}
                            <div className={`${styles.col_5} ${styles.expandbttn}`}>
                                <button id="seventh" onClick={this.handleaccordion}>
                                    {this.state.active ? "-" : "+"}
                                </button>
                            </div>
                            <div
                                className={`${
                                    this.state.active === "seventh"
                                        ? `${styles.expand}`
                                        : `${styles.content}`
                                }`}
                            >
                                <table className={styles.roottable}>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Walmart</td>
                                        <td>1324 New York Ave</td>
                                    </tr>
                                    <tr>
                                        <td>Walmart</td>
                                        <td>1324 New York Ave</td>
                                    </tr>
                                    <tr>
                                        <td>Walmart</td>
                                        <td>1324 New York Ave</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;
