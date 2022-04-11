import React, {Component} from 'react';

import styles from "./auth.module.css"
import {Link} from "react-router-dom";
import {register} from "../utils/Services";
import utils from "../utils/Utilities";


class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            path: window.location.pathname,
            user_id: null,
            user_role: utils.getRole(window.location.pathname),
            email_id: null,
            fname: null,
            lname: null,
            birth_place: "SIREMAR",
            dob: null,
            address: null,
            apt_no: null,
            pwd: null,
            proof_url: '',
            redirectURI: '/',
            redirect: false,
            err: null
        };
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleBirthPlaceChange = this.handleBirthPlaceChange.bind(this);
        this.handleDOBChange = this.handleDOBChange.bind(this);
        this.handleDOBChange = this.handleDOBChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleAPTNOChange = this.handleAPTNOChange.bind(this);
        this.handleProofURLChange = this.handleProofURLChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email_id: event.target.value});
    }

    handleFirstNameChange(event) {
        this.setState({fname: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lname: event.target.value});
    }

    handleBirthPlaceChange(event) {
        this.setState({birth_place: event.target.value});
    }

    handleDOBChange(event) {
        this.setState({dob: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handleAPTNOChange(event) {
        this.setState({apt_no: event.target.value});
    }

    handlePwdChange(event) {
        this.setState({pwd: event.target.value});
    }

    handleProofURLChange(event) {
        console.log(event.target.value);
        this.setState({proof_url: event.target.value});
    }

    handleRegister = () => {
        this.setState({err: null});
        const user = {
            user_id: utils.getUniqueUserId(),
            password: this.state.pwd,
            user_role: this.state.user_role,
            email_id: this.state.email_id,
            fname: this.state.fname,
            lname: this.state.lname,
            birth_place: this.state.birth_place,
            dob: this.state.dob,
            address: this.state.address,
            apt_no: this.state.apt_no,
            pwd: this.state.pwd,
            proof_url: this.state.proof_url
        }
        console.log(user);
        register(user).then((response) => {
            console.log(response.data.message);
            if (response.data.message) {
                this.setState({err: {message: response.data.message, isSuccess: true}})
            } else {
                this.setState({err: {message: response.data, isSuccess: false}});
            }
        });
    };

    render() {
        const loginType = () => {
            if (this.state.path.includes("user")) {
                return (
                    <h1>Resident Registration</h1>
                );
            } else {
                return (
                    <h1>inspector Registration</h1>
                );
            }
        }

        const showError = () => {
            console.log(this.state.err);
            if (this.state.err) {
                return (<div
                    className={this.state.err.isSuccess ? `${styles.alert} ${styles.green}` : `${styles.alert} ${styles.red}`}>
                    <strong> {this.state.err.isSuccess ? "" : "Error!!"} </strong> {this.state.err.message}
                </div>)
            }
        }

        return (
            <div className={styles.container}>
                <div className={styles.col_100}>
                    {loginType()}
                </div>
                <div className={styles.col_100}>
                    {showError()}
                </div>
                <form className={styles.registerForm}>
                    <div className={styles.col_100}>
                        <label for="emailid"><b>Email ID</b></label>
                        <input type="text" onChange={this.handleEmailChange} placeholder="" name="emailid"
                               required/>
                    </div>

                    <div className={styles.col_50}>
                        <label for="fname"><b>First Name</b></label>
                        <input type="text" onChange={this.handleFirstNameChange} placeholder="" name="fname"
                               required/>
                    </div>
                    <div className={styles.col_50}>
                        <label for="lname"><b>Last Name</b></label>
                        <input type="text" placeholder="" onChange={this.handleLastNameChange} name="lname"
                               required/>
                    </div>
                    <div className={styles.col_50}>
                        <label for="dob"><b>Date of Birth</b></label>
                        <input type="date" id="birthday" onChange={this.handleDOBChange} name="dob"/>
                    </div>
                    <div className={styles.col_50}>
                        <label for="bplace"><b>Birth Place</b></label>
                        <select name="cars" id="cars" onChange={this.handleBirthPlaceChange}>
                            <option value="siremar">Siremar</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.col_50}>
                        <label for="bplace"><b>Address #1</b></label>
                        <input type="text" placeholder="" onChange={this.handleAddressChange} name="address1"
                               required/>
                    </div>
                    <div className={styles.col_25}>
                        <label for="bplace"><b>Apt Number</b></label>
                        <input type="number" placeholder="" onChange={this.handleAPTNOChange} name="aptno"
                               required/>
                    </div>
                    <div className={styles.col_25}>
                        <label for="bplace"><b>ZIP Code</b></label>
                        <input type="number" placeholder="" name="zipcode" required/>
                    </div>
                    <div className={styles.col_100}>
                        <label for="bplace"><b>Proof</b></label>
                        <input type="file" id="myFile" onChange={this.handleProofURLChange} name="filename"
                               required/>
                    </div>
                    <div className={styles.col_50}>
                        <label for="bplace"><b>Password</b></label>
                        <input type="password" placeholder="" onChange={this.handlePwdChange} name="psw" required/>
                    </div>
                    <div className={styles.col_50}>
                        <label for="bplace"><b>Retype Password</b></label>
                        <input type="password" placeholder="" name="rpsw" required/>
                    </div>
                    <div className={styles.col_50} onClick={this.handleRegister}>
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
