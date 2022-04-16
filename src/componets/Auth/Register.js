import React, {Component} from "react";
import {Link} from "react-router-dom";
import {register} from "../utils/Services";
import styles from "./auth.module.css";
import utils from "../utils/Utilities";

const PWD_REGEX = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);
const EMAIL_REGEX = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            isValidForm: true,
            path: window.location.pathname,
            user: {
                emailid: "",
                fname: "",
                lname: "",
                birth_place: "SIREMAR",
                dob: "",
                address: "",
                apt_no: "",
                zip_code: "",
                proof_url: "",
                pwd: "",
                rpwd: "",
                user_role: utils.getRole(window.location.pathname)
            },
            redirectURI: "/",
            redirect: false,
            err: null,
            errors: {
                emailid: "",
                fname: "",
                lname: "",
                birth_place: "",
                dob: "",
                address: "",
                apt_no: "",
                pwd: "",
                zip_code: "",
                proof_url: "",
                rpwd: "",
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    formRef = {
        email: React.createRef(),
        fname: React.createRef(),
        lname: React.createRef(),
        birth_place: React.createRef(),
        dob: React.createRef(),
        address: React.createRef(),
        apt_no: React.createRef(),
        pwd: React.createRef(),
        rpwd: React.createRef(),
        proof_url: React.createRef(),
        errRef: React.createRef(),
    };

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        let user_cpy = this.state.user;
        user_cpy[name] = value;
        this.setState({user: user_cpy});

        switch (name) {
            case "emailid":
                errors.emailid = EMAIL_REGEX.test(value) ? "" : "Email is not valid!";
                break;

            case "pwd":
                errors.pwd = PWD_REGEX.test(value) ? "" : "Password is not strong!";
                break;

            case "rpwd":
                errors.rpwd =
                    this.formRef.rpwd.current.value !== this.formRef.pwd.current.value
                        ? "Password doesn't match!"
                        : "";
                break;

            case "fname":
                errors.fname =
                    value.length < 5 ? "First Name must be more 5 characters long!" : "";
                break;

            case "lname":
                errors.lname =
                    value.length < 5
                        ? "Last Name must be at least 5 characters long!"
                        : "";
                break;

            case "birth_place":
                errors.birth_place = !value ? "Birth Place is required!" : "";
                break;

            case "dob":
                errors.dob = !value ? "Date of Birth is required!" : "";
                break;

            case "address":
                errors.address = !value ? "Address is required!" : "";
                break;

            case "apt_no":
                errors.apt_no = !value ? "Apt number is required!" : "";
                break;

            case "zip_code":
                errors.zip_code = !value ? "Zip code is required!" : "";
                break;

            default:
                break;
        }

        this.setState({errors});
    };

    registerUser = () => {
        this.setState({err: null});
        register(this.state.user).then((response) => {
            if (response.data.message) {
                this.setState({
                    err: {message: response.data.message, isSuccess: true},
                });
            } else {
                this.setState({err: {message: response.data, isSuccess: false}});
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (utils.validateForm(this.state.errors, this.state.user)) {
            this.registerUser();
            this.setState({isValidForm: true});
        } else {
            console.error("Form is invalid");
            this.setState({isValidForm: false});
        }
    };

    render() {
        const loginType = () => {
            if (this.state.path.includes("user")) {
                return <h1>Resident Registration</h1>;
            } else {
                return <h1>inspector Registration</h1>;
            }
        };

        const showError = () => {
            if (this.state.err) {
                return (
                    <div
                        className={
                            this.state.err.isSuccess
                                ? `${styles.alert} ${styles.green}`
                                : `${styles.alert} ${styles.red}`
                        }
                    >
                        <strong> {this.state.err.isSuccess ? "" : "Error!!"} </strong>{" "}
                        {this.state.err.message}
                    </div>
                );
            }
        };

        const {errors, isValidForm} = this.state;
        const ref = this.formRef;

        return (
            <div className={styles.container}>
                <div className={styles.col_100}>{loginType()}</div>
                <div className={styles.col_100}>{showError()}</div>
                {errors.emailid.length > 0 && (
                    <div className={styles.error}>{errors.emailid}</div>
                )}
                {errors.fname.length > 0 && (
                    <div className={styles.error}>{errors.fname}</div>
                )}
                {errors.lname.length > 0 && (
                    <div className={styles.error}>{errors.lname}</div>
                )}
                {errors.dob.length > 0 && (
                    <div className={styles.error}>{errors.dob}</div>
                )}
                {errors.birth_place.length > 0 && (
                    <div className={styles.error}>{errors.birth_place}</div>
                )}
                {errors.address.length > 0 && (
                    <div className={styles.error}>{errors.address}</div>
                )}
                {errors.apt_no.length > 0 && (
                    <div className={styles.error}>{errors.apt_no}</div>
                )}
                {errors.zip_code.length > 0 && (
                    <div className={styles.error}>{errors.zip_code}</div>
                )}
                {errors.proof_url.length > 0 && (
                    <div className={styles.error}>{errors.proof_url}</div>
                )}
                {errors.pwd.length > 0 && (
                    <div className={styles.error}>{errors.pwd}</div>
                )}
                {errors.rpwd.length > 0 && (
                    <div className={styles.error}>{errors.rpwd}</div>
                )}
                {!isValidForm && (
                    <div className={styles.error}>
                        Please fill all fields in the form!!!
                    </div>
                )}
                <form className={"unset_form_styles"}
                      onSubmit={this.handleSubmit}
                      noValidate>
                    <div className={styles.col_100}>
                        <label htmlFor="emailid">
                            <b>Email ID</b>
                        </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder=""
                            name="emailid"
                            required
                        />
                    </div>

                    <div className={styles.col_50}>
                        <label htmlFor="fname">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder=""
                            name="fname"
                            autoComplete="given-name"
                            required
                        />
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="lname">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={this.handleChange}
                            name="lname"
                            autoComplete="family-name"
                            required
                        />
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="dob">
                            <b>Date of Birth</b>
                        </label>
                        <input
                            type="date"
                            id="birthday"
                            onChange={this.handleChange}
                            name="dob"
                            autoComplete="bday"
                        />
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="birth_place">
                            <b>Birth Place</b>
                        </label>
                        <select
                            name="birth_place"
                            id="birth_place"
                            autoComplete="country-name"
                            onChange={this.handleChange}
                        >
                            <option value="siremar">Siremar</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="address">
                            <b>Address #1</b>
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={this.handleChange}
                            name="address"
                            required
                        />
                    </div>
                    <div className={styles.col_25}>
                        <label htmlFor="apt_no">
                            <b>Apt Number</b>
                        </label>
                        <input
                            type="number"
                            placeholder=""
                            onChange={this.handleChange}
                            name="apt_no"
                            required
                        />
                    </div>
                    <div className={styles.col_25}>
                        <label htmlFor="zip_code">
                            <b>ZIP Code</b>
                        </label>
                        <input
                            type="number"
                            placeholder=""
                            name="zip_code"
                            onChange={this.handleChange}
                            autoComplete="postal-code"
                            required
                        />
                    </div>
                    <div className={styles.col_100}>
                        <label htmlFor="proof_url">
                            <b>Proof</b>
                        </label>
                        <input
                            type="file"
                            id="proof_url"
                            onChange={this.handleChange}
                            name="proof_url"
                            required
                        />
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="pwd">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder=""
                            onChange={this.handleChange}
                            name="pwd"
                            autoComplete="new-password"
                            ref={ref.pwd}
                            required
                        />
                    </div>
                    <div className={styles.col_50}>
                        <label htmlFor="rpwd">
                            <b>Retype Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder=""
                            name="rpwd"
                            onChange={this.handleChange}
                            autoComplete="new-password"
                            ref={ref.rpwd}
                            required
                        />
                    </div>
                    <div className={styles.col_50}>
                        <button type="submit">Register</button>
                    </div>
                    <div className={styles.col_50}>
                        <Link to={"/"}>
                            <button type="button">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
