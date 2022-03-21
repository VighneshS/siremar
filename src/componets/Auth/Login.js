import React, { Component } from "react";

import { Link } from "react-router-dom";

import styles from "./auth.module.css";

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            path: window.location.pathname,
        };
    }

    handleLogin = () => {};

    render() {
        const LoginRouting = () => {
            if (this.state.path.includes("user")) {
                return (
                    <Link to="/user/dashboard">
                        <button className={styles.bttn} type="submit">
                            Login
                        </button>
                    </Link>
                );
            } else if (this.state.path.includes("admin")) {
                return (
                    <Link to="/admin/dashboard">
                        <button className={styles.bttn} type="submit">
                            Login
                        </button>
                    </Link>
                );
            } else {
                return (
                    <Link to="/inspector/dashboard">
                        <button className={styles.bttn} type="submit">
                            Login
                        </button>
                    </Link>
                );
            }
        };

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

        return (
            <div className={styles.container}>
                <div className={styles.col_100}>
                    {loginType()}
                </div>
                <label for="uname">
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <div className={styles.col_100}>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </div>
                <div className={styles.col_50}>{LoginRouting()}</div>
                <div className={styles.col_50}>
                    <button className={styles.bttn}>Cancel</button>
                </div>

                {/* <label></label> */}
                {/* <span className={styles.psw}>
                    {RegisterRouting()}
                </span> */}
            </div>
        );
    }
}

export default Login;
