import React, {Component} from 'react';
import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
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
                        <li><div className={"nav-wrapper"}><a>Login</a></div></li>
                        <li><div className={"nav-wrapper"}><a>Register</a></div></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;

