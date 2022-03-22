import React, { Component } from 'react';
import AboutUs from '../../componets/AboutUs/AboutUs';
import ContactUs from '../../componets/ContactUs/ContactUs';
import NavBar from '../../componets/NavBar/NavBar';

class LandingPage extends Component {
    constructor(props) {
        super()
        localStorage.clear()
    }
    state = {  } 
    render() { 
        return (
            <div>
                <NavBar />
                <section>
                    <AboutUs />
                </section>
                <section>
                    <ContactUs />
                </section>
            </div>
        );
    }
}
 
export default LandingPage;