import React, {Component} from "react";
import NavBar from "../../componets/NavBar/NavBar";

import styles from "./userprofile.module.css";
import {getUserProfile, getUsers} from "../../componets/utils/Services";
import utils from "../../componets/utils/Utilities";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoaded: false
        }
    }

    loadUserProfile() {
        getUserProfile().then(response => {
            this.setState({user: response.data})
            this.setState({isLoaded: true});
        });
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <NavBar/>

                    <div className={styles.main_cards}>
                        <div className={styles.cards__profile}>
                            <div className={styles.overview__profile_header}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU"
                                    width="150" height="150"/>
                                <h3>Tommy Jones</h3>
                            </div>
                            <div className={styles.profile__form}>
                                <table id={styles.profile}>
                                    <tbody>
                                    <tr>
                                        <th>User ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.user.user_id}</td>
                                        <td>{this.state.user.fname}</td>
                                        <td>{this.state.user.lname}</td>
                                    </tr>
                                    <tr>
                                        <th>Birth Place</th>
                                        <th>Birthday</th>
                                        <th>Email</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.user.birth_place}</td>
                                        <td>{this.state.user.dob}</td>
                                        <td>{this.state.user.email}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="3">Address (Street View, Apartment No)</th>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            {this.state.user.address}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return utils.getProgressCircle();
    }
}

export default UserProfile;
