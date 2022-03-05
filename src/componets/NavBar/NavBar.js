import React from 'react';
import './NavBar.css'

const NavBar=() =>  {
        return (<div>
            <nav>
                <div className={"logo"}><strong>Siremar</strong></div>
                <ul className={"nav-links"}>
                    <li>
                        <div className={"nav-wrapper"}>
                            <a>Home</a>
                        </div>
                    </li>
                    <li>
                        <div className={"nav-wrapper"}>
                            <a>About Us</a></div>
                    </li>
                    <li>
                        <div className={"nav-wrapper"}><a>Contact Us</a></div>
                    </li>
                    <li>
                        <div className={"nav-wrapper"}><a>Login</a></div>
                    </li>
                    <li>
                        <div className={"nav-wrapper"}><a>Register</a></div>
                    </li>
                </ul>
            </nav>
        </div>);
}

export default NavBar;

