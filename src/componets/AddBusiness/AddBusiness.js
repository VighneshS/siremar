import React, { Component } from "react";
import CouponBox from "../CouponBox/CouponBox";

import styles from "./addbusiness.module.css";

class AddBusiness extends React.Component {
    state = {};
    render() {
        return (
            <div className={styles.container}>
                <h2>Manage Businesses</h2>
                    <div className={styles.col_50}>
                        <label>
                            <b>Business Type</b>
                        </label>
                        <select>
                            <option value="Retail">Retail</option>
                            <option value="Events">Events</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label><b>Name</b></label>
                        <input type="text" placeholder="" name="name" required />
                    </div>
                    <div className={styles.col_50}>
                        <label for="lname"><b>Address</b></label>
                        <input type="text" placeholder="" name="address" required />
                    </div>
                    <div className={styles.col_25}>
                        <label for="dep-time">
                            <b>Discount Rate</b>
                        </label>
                        <select>
                            <option value="25%">25%</option>
                            <option value="25%">50%</option>
                            <option value="25%">70%</option>
                        </select>
                    </div>
            </div>
        );
    }
}

export default AddBusiness;
