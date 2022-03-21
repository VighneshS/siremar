import React from 'react';
import { Link } from "react-router-dom";
import classes from './NavBar.css'

const NavBar = () => {
    return (<div>
        <nav>
            <div className={"logo"}><strong>Siremar</strong></div>
            <ul className={"nav-links"}>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/about">
                            About Us
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/approve-registration">
                            Approve Registration
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={"nav-wrapper"}>
                        <Link to="/register">
                            Register
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    </div>);
}

export default NavBar;

