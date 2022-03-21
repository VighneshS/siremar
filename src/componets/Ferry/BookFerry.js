import React, { Component } from "react";
import CouponBox from "../CouponBox/CouponBox";
import styles from "./ferry.module.css";

class BookFerry extends React.Component {
    state = {};
    render() {
        return (
            <div className={styles.container}>
                <h2>SIREMAR Ferry Booking</h2>
                <div className={styles.col_75}>
                    <div className={styles.col_50}>
                        <label for="bplace">
                            <b>Ferry Name</b>
                        </label>
                        <select>
                            <option value="ABC Ferry">ABC Ferry</option>
                            <option value="XYZ Ferry">XYZ Ferry</option>
                        </select>
                    </div>
                    <div className={styles.col_25}>
                        <label for="bplace">
                            <b>From</b>
                        </label>
                        <select>
                            <option value="Siremar Dock A">Siremar Dock A</option>
                            <option value="Siremar Dock B">Siremar Dock B</option>
                            <option value="Siremar Dock C">Siremar Dock C</option>
                            <option value="Siremar Dock D">Siremar Dock D</option>
                        </select>
                    </div>
                    <div className={styles.col_25}>
                        <label for="bplace">
                            <b>To</b>
                        </label>
                        <select>
                            <option value="Siremar Dock A">Siremar Dock A</option>
                            <option value="Siremar Dock B">Siremar Dock B</option>
                            <option value="Siremar Dock C">Siremar Dock C</option>
                            <option value="Siremar Dock D">Siremar Dock D</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="dob">
                            <b>Date of Travel</b>
                        </label>
                        <input type="date" name="dot" />
                    </div>
                    <div className={styles.col_25}>
                        <label for="bplace">
                            <b>Departure Time</b>
                        </label>
                        <select>
                            <option value="09:00">09:00</option>
                            <option value="12:00">12:00</option>
                            <option value="14:00">14:00</option>
                            <option value="19:00">19:00</option>
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

export default BookFerry;
