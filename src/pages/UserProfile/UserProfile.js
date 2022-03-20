import React, { Component } from "react";

import styles from "./userprofile.module.css";

class UserProfile extends Component {
    state = {};
    render() {
        return (
            <div className={styles.main_cards}>
                <div className={styles.cards__profile}>
                    <div className={styles.overview__profile_header}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" width="150" height="150" />
                        <h3>Abishek PSS</h3>
                    </div>
                    <div className={styles.profile__form}>
                        <table id={styles.profile}>
                            <tr>
                                <th>Username</th>
                                <th>UTA ID</th>
                                <th>Role</th>
                            </tr>
                            <tr>
                                <td>xx.xx@mavs.uta.edu</td>
                                <td>1001704417</td>
                                <td>The Role goes here</td>
                            </tr>
                            <tr>
                                <th>Birthdate</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                            <tr>
                                <td>01/01/1994</td>
                                <td>xx.xx@mavs.uta.edu</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <th colspan="3">Address (Street View, Apartment No)</th>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    513 Summit Avenue Apt ### Meadow Run Arlington TX 76013
                                </td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <th>Zipcode</th>
                                <th>Country</th>
                            </tr>
                            <tr>
                                <td>Arlington</td>
                                <td>76013</td>
                                <td>United States</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
