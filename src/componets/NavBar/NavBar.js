import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (<div>
        <nav>
            <div className={"logo"}><strong>Siremar</strong></div>
            <ul className={"nav-links"}>
                <li>
                    <div className={"nav-wrapper"}>
                        <a href={"#"}>Home</a>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <a href={"#"}>About Us</a></div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <a href={"#"}>Approve Registrations</a></div>
                </li>
                <li>
                    <div className={"nav-wrapper"}><a href={"#"}>Contact Us</a></div>
                </li>
                <li>
                    <div className={"nav-wrapper"}><a href={"#"}>Login</a></div>
                </li>
                <li>
                    <div className={"nav-wrapper"}><a href={"#"}>Register</a></div>
                </li>
            </ul>
        </nav>
    </div>);
}

export default NavBar;

