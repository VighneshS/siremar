import React, { Component } from "react";

import styles from "./coupon.module.css";

class CouponBox extends Component {
    state = {};
    handleCoupon = () => {
        this.props.discountApplied(true)
    }
    render() {
        return (
            <div>
                <div className={styles.col_25}>
                    <label>Have coupon?</label>
                </div>
                <div className={styles.col_50}>
                    <input type="text" name="" placeholder="Coupon code" />                    
                </div>
                <div className={styles.col_25}> 
                    <button class="btn btn-primary btn-apply coupon" onClick={this.handleCoupon}>Apply</button>
                </div>
            
            </div>
        );
    }
}

export default CouponBox;
