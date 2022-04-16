import React, { Component } from "react";
import NavBar from "../../componets/NavBar/NavBar";

import styles from "./userprofile.module.css";

class UserProfile extends Component {
    state = {};
    render() {
        return (
            <div>
                <NavBar />
            
            <div className={styles.main_cards}>
                <div className={styles.cards__profile}>
                    <div className={styles.overview__profile_header}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" width="150" height="150" />
                        <h3>Tommy Jones</h3>
                    </div>
                    <div className={styles.profile__form}>
                        <table id={styles.profile}>
                            <tr>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                            <tr>
                                <td>100184</td>
                                <td>Tommy</td>
                                <td>Jones</td>
                            </tr>
                            <tr>
                                <th>Birth Place</th>
                                <th>Birthday</th>
                                <th>Gender</th>
                            </tr>
                            <tr>
                                <td>SIREMAR</td>
                                <td>01/01/1994</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th colspan="3">Address (Street View, Apartment No)</th>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    513 Summit Avenue Apt ### Meadow Run
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default UserProfile;
