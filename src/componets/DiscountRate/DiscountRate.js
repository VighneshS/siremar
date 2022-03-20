import React, { Component } from "react";

import styles from "./discount.module.css";
class DiscountRate extends Component {
    state = {
        discountCode: "SIREMAR101",
        isCopied: false
    };

    handleClick = () => {
        this.setState({
            isCopied: !this.state.isCopied
        })
        navigator.clipboard.writeText(this.state.discountCode)
    }
    render() {
        const copied = () => {
            if (this.state.isCopied) {
                return (
                    <a onClick={this.handleClick}><b>{this.state.discountCode} Copied!</b></a>
                )
            } else {
                return (
                    <a onClick={this.handleClick}><b>{this.state.discountCode}</b></a>
                )
            }
        }
        return (
            <div className={styles.container}>
                <div className={styles.discount_text}>
                    <p>
                        For discounts on services use coupon code:  
                        {copied()}
                    </p>
                </div>
            </div>
        );
    }
}

export default DiscountRate;
