import React, { Component } from 'react';
import CouponBox from "../CouponBox/CouponBox";

import styles from './courses.module.css'

class CourseRegister extends Component {
    state = { 
        course: ""
     } 
    handleSelected_course = (e) => {
        this.setState({
            course: e.target.value
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <h2>SIREMAR University Course Enrollment</h2>
                <div className={styles.col_75}>
                    <div className={styles.col_50}>
                        <label htmlFor="flight-name"><b>Campus</b></label>
                        <select>
                            <option value="SW Campus">SW Campus</option>
                            <option value="NE Campus">NE Campus</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="destination"><b>Courses</b></label>
                        <select onChange={this.handleSelected_course}>
                            <option value="CSE 5301">CSE 5301</option>
                            <option value="CSE 5311">CSE 5311</option>
                            <option value="CSE 6324">CSE 6324</option>
                            <option value="CSE 5303">CSE 5303</option>
                        </select>
                    </div>
                    <div className={styles.col_25}>
                        <label htmlFor="dep-time"><b>Section</b></label>
                        <select>
                            <option value="#1">#1</option>
                            <option value="#2">#2</option>
                            <option value="#3">#3</option>
                        </select>
                    </div>
                    {/* <div className={styles.col_25}>
                        <label htmlFor="dep-time"><b>Departure Time</b></label>
                        <select>
                            <option value="09:00">09:00</option>
                            <option value="11:00">11:00</option>
                            <option value="13:00">13:00</option>
                            <option value="16:00">16:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:30">21:30</option>
                        </select>
                    </div> */}
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
                </div>
            </div>
        );
    }
}
 
export default CourseRegister;
