import React, { Component } from "react";
import {Link} from "react-router-dom";

import styles from './contact.module.css'
class ContactUs extends Component {
    state = {
        subject: "",
        from: "",
        message: ""
    };

    handleSubmit = () => {
        window.location.href = `mailto:contact@axp2009.uta.cloud?subject=${this.state.subject}&body=${this.state.message}`; 
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>&bull; CONTACT US &bull;</h1>
                <form>
                    <div className={styles.name}>
                        <label for="name"></label>
                        <input
                            type="text"
                            placeholder="My name is"
                            name="name"
                            id="name_input"
                            required
                        />
                    </div>
                    <div className={styles.email}>
                        <label for="email"></label>
                        <input
                            type="email"
                            placeholder="My e-mail is"
                            name="email"
                            id="email_input"
                            onChange={(e) =>
                                this.setState({
                                    from: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className={styles.telephone}>
                        <label for="name"></label>
                        <input
                            type="text"
                            placeholder="My number is"
                            name="telephone"
                            id="telephone_input"
                            required
                        />
                    </div>
                    <div className={styles.subject}>
                        <label for="subject"></label>
                        <input
                            type="text"
                            placeholder="Subject Line"
                            name="subject"
                            id="subject_input"
                            onChange={(e) =>
                                this.setState({
                                    subject: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className={styles.message}>
                        <label for="message"></label>
                        <textarea
                            name="message"
                            placeholder="I'd like to chat about"
                            id="message_input"
                            cols="30"
                            rows="5"
                            required
                            onChange={(e) =>
                                this.setState({
                                    message: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <div className={styles.submit}>
                        <button onClick={this.handleSubmit}>Send Message</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactUs;
