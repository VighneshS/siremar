import React, { Component } from 'react';

import styles from './registerout.module.css'

class RegisterOut extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.container}>
                <h2>Register Move Out</h2>
                <div className={styles.col_50}>
                    <label htmlFor="dob"><b>Date of Move Out</b></label>
                    <input type="date" name="dot" />
                </div>
                <div className={styles.col_100}>
                    <label htmlFor="reason"><b>Reason</b></label>
                    <textarea name="reson" rows="4" cols="50" />
                </div>
                <div className={styles.col_50}>
                    <button type="submit">Submit</button>
                </div>
                <div className={styles.col_50}>
                    <button type="button">Cancel</button>
                </div>
            </div>
        );
    }
}
 
export default RegisterOut;
