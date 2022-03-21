import React, { Component } from 'react';
import AboutUs from '../../componets/AboutUs/AboutUs';
import ContactUs from '../../componets/ContactUs/ContactUs';

class LandingPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
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