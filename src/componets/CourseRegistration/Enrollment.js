import React, { Component } from 'react';

import styles from './courses.module.css'

class CourseRegister extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.container}>
                <h2>SIREMAR University Course Enrollment</h2>
                <div className={styles.col_50}>
                    <label for="flight-name"><b>Campus</b></label>
                    <select>
                        <option value="SW Campus">SW Campus</option>
                        <option value="NE Campus">NE Campus</option>
                    </select>
                </div>
                <div className={styles.col_50}>
                    <label for="destination"><b>Destination</b></label>
                    <select>
                        <option value="Siremar Airport North">Siremar Airport North</option>
                        <option value="Siremar Airport South">Siremar Airport South</option>
                        <option value="Siremar Airport East">Siremar Airport East</option>
                        <option value="Siremar Airport West">Siremar Airport West</option>
                    </select>
                </div>
                <div className={styles.col_50}>
                    <label for="dob"><b>Date of Travel</b></label>
                    <input type="date" name="dot" />
                </div>
                <div className={styles.col_25}>
                    <label for="dep-time"><b>Departure Time</b></label>
                    <select>
                        <option value="09:00">09:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="16:00">16:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:30">21:30</option>
                    </select>
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
 
export default CourseRegister;