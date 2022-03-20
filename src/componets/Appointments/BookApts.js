import React, { Component } from "react";
import CouponBox from "../CouponBox/CouponBox";

import styles from "./appointments.module.css";

class BookApts extends React.Component {
    state = {};
    render() {
        return (
            <div className={styles.container}>
                <h2>Book Doctor Appointment</h2>
                <div className={styles.col_75}>
                    <div className={styles.col_50}>
                        <label>
                            <b>Clinic Name</b>
                        </label>
                        <select>
                            <option value="ABC Clinic">ABC Clinic</option>
                            <option value="XYZ Clinic">XYZ Clinic</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="destination">
                            <b>Specialization</b>
                        </label>
                        <select>
                            <option value="Dentist">Dentist</option>
                            <option value="Ortho">Ortho</option>
                            <option value="Urologist">Urologist</option>
                            <option value="General Doctor">General Doctor</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="dob">
                            <b>Date</b>
                        </label>
                        <input type="date" name="dot" />
                    </div>
                    <div className={styles.col_25}>
                        <label for="dep-time">
                            <b>Time</b>
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
                        <CouponBox />
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
                        <div className={styles.totals_item}>
                            <label>Discount (25%)</label>
                            <div className={styles.totals_value} id="cart-tax">
                                -25.00
                            </div>
                        </div>
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

export default BookApts;
