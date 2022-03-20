import React, { Component } from "react";
import CouponBox from "../CouponBox/CouponBox";

import styles from "./flights.module.css";

class BookFlights extends Component {
    state = {
        appliedDiscount: false,
    };
    handleCouponValue = (val) => {
        this.setState({
            appliedDiscount: val,
        });
    };
    render() {
        const status = () => {
            if (this.state.appliedDiscount) {
                return (
                    <div className={styles.totals_item}>
                        <label>Discount (25%)</label>
                        <div className={styles.totals_value} id="cart-tax">
                            -25.00
                        </div>
                    </div>
                );
            } else {
                return "";
            }
        };
        return (
            <div className={styles.container}>
                <h2>SIREMAR Flight Booking</h2>
                <div className={styles.col_75}>
                    <div className={styles.col_50}>
                        <label for="flight-name">
                            <b>Flight Name</b>
                        </label>
                        <select>
                            <option value="ABC Airlines">ABC Airlines</option>
                            <option value="XYZ Airlines">XYZ Airlines</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="destination">
                            <b>Destination</b>
                        </label>
                        <select>
                            <option value="Siremar Airport North">Siremar Airport North</option>
                            <option value="Siremar Airport South">Siremar Airport South</option>
                            <option value="Siremar Airport East">Siremar Airport East</option>
                            <option value="Siremar Airport West">Siremar Airport West</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="dob">
                            <b>Date of Travel</b>
                        </label>
                        <input type="date" name="dot" />
                    </div>
                    <div className={styles.col_25}>
                        <label for="dep-time">
                            <b>Departure Time</b>
                        </label>
                        <select>
                            <option value="09:00">09:00</option>
                            <option value="11:00">11:00</option>
                            <option value="13:00">13:00</option>
                            <option value="16:00">16:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:30">21:30</option>
                        </select>
                    </div>
                    <div className={styles.col_100}>
                        <CouponBox discountApplied={this.handleCouponValue} />
                    </div>
                </div>
                <div className={styles.col_25}>
                    <div className={styles.totals}>
                        <div className={styles.totals_item}>
                            <label>Subtotal</label>
                            <div className={styles.totals_value} id="cart-subtotal">
                                100.00
                            </div>
                        </div>
                        {status()}
                        <div className={styles.totals_item}>
                            <label>Tax (2%)</label>
                            <div className={styles.totals_value} id="cart-shipping">
                                2
                            </div>
                        </div>
                        <div className={styles.totals_item}>
                            <label>Grand Total</label>
                            <div className={styles.totals_value} id="cart-total">
                                $77.00
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
            </div>
        );
    }
}

export default BookFlights;
