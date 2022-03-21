import React, {Component} from 'react';
import classes from "./AboutUs.module.css"


export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.about}>
                <div className={classes.wrapper}>
                    <h1 className={classes.heading}>SIREMAR</h1>
                    <p>Siremar is a web application used to keep records of the dynamic count of all the residents of
                        the beautiful Island Margarita located in South America. This is done so that the Island can get
                        a stable sound budget from the Central Government.</p>
                    <p>For this to work we need all the residents of Margarita, who have lived there over a year or from
                        birth, to be registered in the application.</p>
                    <p>To make the residents register in Siremar we are providing benefits for registered residents.</p>
                    <h2>Benefits</h2>
                    <div>
                        <ul>
                            <li>Enrolling into Schools</li>
                            <li>Clinic Appointments</li>
                            <li>Discounts on Flights</li>
                            <li>Discounts on Ferries</li>
                            <li>Discounts on Events</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
