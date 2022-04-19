import React, {Component} from "react";

import {Link, Navigate} from "react-router-dom";

import styles from "./auth.module.css";
import {login} from "../utils/Services";
import utils from "../utils/Utilities"

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            path: window.location.pathname,
            user_id: null,
            password: null,
            redirectURI: null,
            redirect: false,
            isRememberMe: true,
            err: null
        };
        this.handleUserIDChange = this.handleUserIDChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    routeLogin = () => {
        if (this.state.path.includes("user")) {
            this.setState({redirectURI: "/user/dashboard"})
        } else if (this.state.path.includes("admin")) {
            this.setState({redirectURI: "/admin/dashboard"})
        } else {
            this.setState({redirectURI: "/inspector/dashboard"})
        }
        this.setState({redirect: true})
    };

    handleLogin = () => {
        this.setState({err: null});
        login({
            user_id: this.state.user_id,
            password: this.state.password,
            user_role: utils.getRole(this.state.path)
        }).then((response) => {
            if (response.data.user_id) {
                localStorage.setItem('isLoggedin', true)
                localStorage.setItem(utils.CURRENT_USER, response.data.user_id)
                this.routeLogin()

            } else {
                this.setState({err: {message: response.data}});
            }
        });
    };

    handleUserIDChange(event) {
        this.setState({user_id: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        const loginType = () => {
            if (this.state.path.includes("user")) {
                return (
                    <h1>Resident Login</h1>
                );
            } else if (this.state.path.includes("admin")) {
                return (
                    <h1>Admin Login</h1>
                );
            } else {
                return (
                    <h1>Inspector Login</h1>
                );
            }
        }

        const showError = () => {
            if (this.state.err) {
                return (<div className={styles.alert}>
                    <strong> Error!! </strong> {this.state.err.message}
                </div>)
            }
        }

        if (this.state.redirect) {
            return <Navigate to={this.state.redirectURI}/>;
        } else {

            return (
                <div className={styles.container}>
                    <div className={styles.col_100}>
                        {loginType()}
                    </div>
                    <div className={styles.col_100}>
                        {showError()}
                    </div>
                    <label htmlFor="uname">
                        <b>User ID</b>
                    </label>
                    <input autoComplete={"off"} onChange={this.handleUserIDChange} type="number"
                           value={this.state.user_id} placeholder="Enter User ID"
                           name="uname" required/>

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" onChange={this.handlePasswordChange} value={this.state.password}
                           placeholder="Enter Password" name="psw"
                           required/>

                    <div className={styles.col_100}>
                        <input type="checkbox" defaultChecked={this.isRememberMe} checked="checked"
                               name="remember"/> Remember me
                    </div>
                    <div className={styles.col_50} onClick={this.handleLogin}>
                        <button className={styles.bttn} type="submit">
                            Login
                        </button>
                    </div>
                    <div className={styles.col_50}>
                        <Link to="/">
                            <button className={styles.bttn}>Cancel</button>
                        </Link>
                    </div>

                    {/* <label></label> */}
                    {/* <span className={styles.psw}>
                    {RegisterRouting()}
                </span> */}
                </div>
            );
        }
    }
}

export default Login;
