import React, { Component } from "react";

import styles from "./adddiscount.module.css";

class AddDiscount extends Component {
    state = {};
    render() {
        return (
            <div className={styles.container}>
                <h2>Coupon of the Day</h2>
                <div className={styles.col_50}>
                    <label>
                        <b>Discount Code</b>
                    </label>
                    <input type="text" placeholder="" name="code" required />
                </div>
                <div className={styles.col_25}>
                    <label>
                        <b>Discount on Events</b>
                    </label>
                    <select>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="75%">75%</option>
                    </select>
                </div>
                <div className={styles.col_25}>
                    <label>
                        <b>Discount on Ferrys</b>
                    </label>
                    <select>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="75%">75%</option>
                    </select>
                </div>
                <div className={styles.col_25}>
                    <label>
                        <b>Discount on Flights</b>
                    </label>
                    <select>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="75%">75%</option>
                    </select>
                </div>
                <div className={styles.col_25}>
                    <label>
                        <b>Discount on Clinics</b>
                    </label>
                    <select>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="75%">75%</option>
                    </select>
                </div>
                <div className={styles.col_25}>
                    <label>
                        <b>Discount on Schools</b>
                    </label>
                    <select>
                        <option value="25%">25%</option>
                        <option value="50%">50%</option>
                        <option value="75%">75%</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default AddDiscount;
