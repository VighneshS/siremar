import React, { Component } from "react";

import styles from './contact.module.css'
class ContactUs extends Component {
    state = {};
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
                        ></textarea>
                    </div>
                    <div className={styles.submit}>
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactUs;
