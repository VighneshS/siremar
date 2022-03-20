import React, { Component } from 'react';

import { Link } from "react-router-dom";

import styles from "./auth.module.css"

class Login extends Component {
    constructor(props) {
        super ()
        this.state = { 
            path: window.location.pathname
         } 
    }

    handleLogin = () => {

    }
    
    render() { 
        const routing = () => {
            if (this.state.path.includes("user")){
                return (
                    <Link to="/user/dashboard">
                        <button className={styles.bttn} type="submit" >Login</button>
                    </Link>
                )
            } else {
                return (
                    <Link to="/inspector/dashboard">
                        <button className={styles.bttn} type="submit" >Login</button>
                    </Link>
                )
            }
        }
        return (
            <div className={styles.container}>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                
                <div className={styles.col_100}>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </div>
                <div className={styles.col_50}>
                    {routing()} 
                </div>
                <div className={styles.col_50}>
                        <button className={styles.bttn}>Cancel</button>
                </div>

                <label>
                </label>
                {/* <span className={styles.psw}>Forgot <a href="#">password?</a></span> */}
            </div>
        );
    }
}
 
export default Login;