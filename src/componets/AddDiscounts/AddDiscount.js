import React, {Component} from "react";

import styles from "./adddiscount.module.css";
import utils from "../utils/Utilities";
import {addDiscount} from "../utils/Services";

const DISCOUNT_CODE_FIELD = "discount_code";
const EVENTS_RATE_FIELD = "events_rate";
const FERRY_RATE_FIELD = "ferry_rate";
const FLIGHT_RATE_FIELD = "flight_rate";
const CLINIC_RATE_FIELD = "clinic_rate";
const SCHOOL_RATE_FIELD = "school_rate";

class AddDiscount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            message: {
                value: "Discount Added Successfully",
                isError: false
            },
            isAdded: false,
            isValidForm: true,
            errors: {
                discount_code: "",
                events_rate: "",
                ferry_rate: "",
                flight_rate: "",
                clinic_rate: "",
                school_rate: ""
            }
        };
        if (props.data) {
            this.state.discount = props.data
        } else {
            this.state.discount = {
                discount_code: '',
                events_rate: "25%",
                ferry_rate: "25%",
                flight_rate: "25%",
                clinic_rate: "25%",
                school_rate: "25%"
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        let discount_cpy = this.state.discount;
        discount_cpy[name] = value;
        this.setState({discount: discount_cpy});

        switch (name) {

            case DISCOUNT_CODE_FIELD:
                errors[DISCOUNT_CODE_FIELD] = !value ? "Discount code is required!" : "";
                break;

            case EVENTS_RATE_FIELD:
                errors[EVENTS_RATE_FIELD] = !value ? "Events Discount is required!" : "";
                break;

            case FERRY_RATE_FIELD:
                errors[FERRY_RATE_FIELD] = !value ? "Ferry Discount is required!" : "";
                break;

            case FLIGHT_RATE_FIELD:
                errors[FLIGHT_RATE_FIELD] = !value ? "Flight Discount is required!" : "";
                break;

            case CLINIC_RATE_FIELD:
                errors[CLINIC_RATE_FIELD] = !value ? "Clinic Discount is required!" : "";
                break;

            case SCHOOL_RATE_FIELD:
                errors[SCHOOL_RATE_FIELD] = !value ? "School Discount is required!" : "";
                break;

            default:
                break;
        }

        this.setState({errors});
    };

    addDiscount = (event) => {
        event.preventDefault();
        if (utils.validateForm(this.state.errors, this.state.discount)) {
            this.setState({isValidForm: true});
            this.setState({isLoaded: false})
            addDiscount(this.state.discount).then(response => {
                this.setState({isAdded: true})
                this.setState({isLoaded: true})
                this.setState({
                    message: {
                        value: response.data.message,
                        isError: response.data.message.toLowerCase().includes("error")
                    }
                })
            })
        } else {
            this.setState({isValidForm: false});
        }
    }

    render() {
        const {errors, isValidForm, isAdded} = this.state;
        if (this.state.isLoaded) {
            return (
                <div className={styles.container}>
                    {errors[DISCOUNT_CODE_FIELD].length > 0 && (
                        <div className={styles.error}>{errors.date}</div>
                    )}
                    {!isValidForm && (
                        <div className={styles.error}>
                            Please fill all fields in the form!!!
                        </div>
                    )}
                    {isAdded && (
                        <div className={this.state.message.isError ? styles.error : styles.success}>
                            {this.state.message.value}
                        </div>
                    )}
                    <form className={"unset_form_styles"}
                          onSubmit={this.addDiscount}
                          noValidate>
                        <h2>Coupon of the Day</h2>
                        <div className={styles.col_50}>
                            <label>
                                <b>Discount Code</b>
                            </label>
                            <input value={this.state.discount.discount_code} type="text" placeholder=""
                                   name={DISCOUNT_CODE_FIELD} onChange={this.handleChange}
                                   required={"required"}/>
                        </div>
                        <div className={styles.col_25}>
                            <label>
                                <b>Discount on Events</b>
                            </label>
                            <select value={this.state.discount.events_rate} name={EVENTS_RATE_FIELD}
                                    onChange={this.handleChange} required={"required"}>
                                <option value="25%">25%</option>
                                <option value="50%">50%</option>
                                <option value="75%">75%</option>
                            </select>
                        </div>
                        <div className={styles.col_25}>
                            <label>
                                <b>Discount on Ferrys</b>
                            </label>
                            <select value={this.state.discount.ferry_rate} name={FERRY_RATE_FIELD}
                                    onChange={this.handleChange} required={"required"}>
                                <option value="25%">25%</option>
                                <option value="50%">50%</option>
                                <option value="75%">75%</option>
                            </select>
                        </div>
                        <div className={styles.col_25}>
                            <label>
                                <b>Discount on Flights</b>
                            </label>
                            <select value={this.state.discount.flight_rate} name={FLIGHT_RATE_FIELD}
                                    onChange={this.handleChange} required={"required"}>
                                <option value="25%">25%</option>
                                <option value="50%">50%</option>
                                <option value="75%">75%</option>
                            </select>
                        </div>
                        <div className={styles.col_25}>
                            <label>
                                <b>Discount on Clinics</b>
                            </label>
                            <select value={this.state.discount.clinic_rate} name={CLINIC_RATE_FIELD}
                                    onChange={this.handleChange} required={"required"}>
                                <option value="25%">25%</option>
                                <option value="50%">50%</option>
                                <option value="75%">75%</option>
                            </select>
                        </div>
                        <div className={styles.col_25}>
                            <label>
                                <b>Discount on Schools</b>
                            </label>
                            <select value={this.state.discount.school_rate} name={SCHOOL_RATE_FIELD}
                                    onChange={this.handleChange} required={"required"}>
                                <option value="25%">25%</option>
                                <option value="50%">50%</option>
                                <option value="75%">75%</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit">{!this.state.discount.id ? 'Add ' : 'Update '} Discount</button>
                        </div>
                    </form>
                </div>
            );
        }
        return utils.getProgressCircle();
    }
}

export default AddDiscount;
