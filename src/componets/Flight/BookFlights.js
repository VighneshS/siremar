import React, {Component} from "react";
import CouponBox from "../CouponBox/CouponBox";

import styles from "./flights.module.css";
import {bookTickets, getFlights} from "../utils/Services";
import utils from "../utils/Utilities";

class BookFlights extends Component {
    constructor(props) {
        super();
        this.state = {
            appliedDiscount: 0,
            isLoaded: false,
            isBooked: false,
            flights: null,
            booking: {
                transport_id: null,
                transport_type: utils.FLIGHT,
                source: "SIREMAR AIRPORT CENTRAL",
                destination: null,
                date: null,
                time: null
            },
            isValidForm: true,
            errors: {
                date: "",
                destination: "",
                time: "",
                transport_id: "",
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleCouponValue = (val) => {
        this.setState({
            appliedDiscount: val,
        });
    };

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        let booking_cpy = this.state.booking;
        booking_cpy[name] = value;
        this.setState({booking: booking_cpy});

        switch (name) {

            case "date":
                errors.date = !value ? "Date of Travel is required!" : "";
                break;

            case "destination":
                errors.destination = !value ? "Destination is required!" : "";
                break;

            case "time":
                errors.time = !value ? "Time is required!" : "";
                break;

            case "transport_id":
                errors.transport_id = !value ? "Flight Name is required!" : "";
                break;

            default:
                break;
        }

        this.setState({errors});
    };

    getFlights() {
        getFlights().then(response => {
            let booking_cpy = this.state.booking;
            booking_cpy["transport_id"] = response.data.message[0].flight_no;
            booking_cpy["destination"] = "Siremar Airport North";
            booking_cpy["time"] = "09:00";
            this.setState({booking: booking_cpy});
            this.setState({isLoaded: true})
            this.setState({flights: response.data.message})
        })
    }

    bookTickets = (event) => {
        event.preventDefault();
        if (utils.validateForm(this.state.errors, this.state.booking)) {
            this.setState({isValidForm: true});
            this.setState({isLoaded: false})
            bookTickets(this.state.booking).then(response => {
                this.setState({isBooked: true})
                this.setState({isLoaded: true})
            })
        } else {
            this.setState({isValidForm: false});
        }
    }

    renderFlightOptions() {
        if (this.state.flights) {
            let options = this.state.flights.map((data) => {
                return (<option value={data.flight_no}>{data.airline_name}</option>);
            });
            return (
                <select name={"transport_id"} value={this.state.flights[0].flight_no} onChange={this.handleChange} required>
                    {options}
                </select>
            );
        }
        return utils.getProgressCircle();
    }

    renderDestinationOptions() {
        if (this.state.flights) {
            let options = this.state.flights.map((data) => {
                return (<option value={data.airline_name}>{data.airline_name}</option>);
            });
            return (
                <select>
                    {options}
                </select>
            );
        }
        return utils.getProgressCircle();
    }

    componentDidMount() {
        this.getFlights()
    }

    render() {
        const status = () => {
            if (this.state.appliedDiscount) {
                let discountRate = (this.state.appliedDiscount/100) * 100
                return (
                    <div className={styles.totals_item}>
                        <label>Discount ({this.state.appliedDiscount}%)</label>
                        <div className={styles.totals_value} id="cart-tax">
                            -{discountRate}.00
                        </div>
                    </div>
                );
            } else {
                return "";
            }
        };
        if (this.state.isLoaded) {
            const {errors, isValidForm, isBooked} = this.state;
            return (
                <div className={styles.container}>
                    <h2>SIREMAR Flight Booking</h2>
                    {errors.date.length > 0 && (
                        <div className={styles.error}>{errors.date}</div>
                    )}
                    {!isValidForm && (
                        <div className={styles.error}>
                            Please fill all fields in the form!!!
                        </div>
                    )}
                    {isBooked && (
                        <div className={styles.success}>
                            Booked Ticket successfully
                        </div>
                    )}
                    <form className={"unset_form_styles"}
                          onSubmit={this.bookTickets}
                          noValidate>
                        <div className={styles.col_75}>
                            <div className={styles.col_50}>
                                <label htmlFor="flight-name">
                                    <b>Flight Name</b>
                                </label>
                                {this.renderFlightOptions()}
                            </div>
                            <div className={styles.col_50}>
                                <label htmlFor="destination">
                                    <b>Destination</b>
                                </label>
                                <select name={"destination"} value={"Siremar Airport North"} required onChange={this.handleChange}>
                                    <option value="Siremar Airport North">Siremar Airport North</option>
                                    <option value="Siremar Airport South">Siremar Airport South</option>
                                    <option value="Siremar Airport East">Siremar Airport East</option>
                                    <option value="Siremar Airport West">Siremar Airport West</option>
                                </select>
                            </div>
                            <div className={styles.col_50}>
                                <label htmlFor="date">
                                    <b>Date of Travel</b>
                                </label>
                                <input type="date" required name="date" onChange={this.handleChange}/>
                            </div>
                            <div className={styles.col_25}>
                                <label htmlFor="time">
                                    <b>Departure Time</b>
                                </label>
                                <select required value={"09:00"} name={"time"} onChange={this.handleChange}>
                                    <option value="09:00">09:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:30">21:30</option>
                                </select>
                            </div>
                            <div className={styles.col_100}>
                                <CouponBox discountApplied={this.handleCouponValue} type={"flights"}/>
                            </div>
                        </div>
                        <div className={styles.col_25}>
                            <div className={styles.totals}>
                                <div className={styles.totals_item}>
                                    <label>Subtotal</label>
                                    <div className={styles.totals_value} id="cart-subtotal">
                                        $100.00
                                    </div>
                                </div>
                                {status()}
                                <div className={styles.totals_item}>
                                    <label>Tax (2%)</label>
                                    <div className={styles.totals_value} id="cart-shipping">
                                        $2
                                    </div>
                                </div>
                                <div className={styles.totals_item}>
                                    <label>Grand Total</label>
                                    <div className={styles.totals_value} id="cart-total">
                                        ${100 - (this.state.appliedDiscount/100) * 100 + 2}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col_50}>
                                <button type="submit">Checkout</button>
                            </div>
                            {/* <div className={styles.col_50}>
                        <button type="button">Cancel</button>
                    </div> */}
                        </div>
                    </form>
                </div>
            );
        }
        return utils.getProgressCircle();
    }
}

export default BookFlights;
