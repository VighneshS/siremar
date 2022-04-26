import React, {Component} from 'react';
import ReactDOM from "react-dom";
import classes from './NavBar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {endPoints} from "../../App";
import utils from "../utils/Utilities";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuToggle: true,
            isLoggedIn: localStorage.getItem('isLoggedin'),
            pages: props.pages ? props.pages : []
        }
        this.menu = null;
        this.toggle = null;
        this.items = [];
    }

    toggleMenu = (e) => {
        if (this.menu.classList.contains(classes.active)) {
            this.menu.classList.remove(classes.active);

            // adds the menu (hamburger) icon
            this.setState({
                menuToggle: true
            })
        } else {
            this.menu.classList.add(classes.active);

            // adds the close (x) icon
            this.setState({
                menuToggle: false
            })
        }
    }


    /* Activate Submenu */
    toggleItem = (e) => {
        let element = ReactDOM.findDOMNode(e.target).parentNode
        if (element.classList.contains(classes.submenuActive)) {
            element.classList.remove(classes.submenuActive);
        } else if (this.menu.querySelector("." + classes.submenuActive)) {
            this.menu.querySelector("." + classes.submenuActive).classList.remove(classes.submenuActive);
            element.classList.add(classes.submenuActive);
        } else {
            element.classList.add(classes.submenuActive);
        }
    }

    /* Close Submenu From Anywhere */
    closeSubmenu(e) {
        let active_menu = document.getElementById("menu")
        let isClickInside = active_menu.contains(ReactDOM.findDOMNode(e.target));
        if (!isClickInside && active_menu.querySelector("." + classes.submenuActive)) {
            let activeSubMenu = ReactDOM.findDOMNode(active_menu.querySelector("." + classes.submenuActive))
            activeSubMenu.classList.remove("." + classes.submenuActive);
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.closeSubmenu, true);
    }

    render() {
        const isLogged = () => {
            if(this.state.isLoggedIn) {
                return(
                    // ADD/EDIT CLASS TO MODIFY THE WIDTH OF THE SUBMENU
                    <li key={utils.getRandomUniqueId()} className={`${classes.item} ${classes.hasSubmenu} ${classes.button}`} ref={function (el) {
                        self.items.push(el)
                    }} onClick={this.toggleItem}>
                        <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                        <ul className={classes.submenu}>
                             <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                                <Link to="/user-profile">
                                    View Profile
                                </Link>
                            </li>
                             <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                                <Link to="/">
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </li>
                )
            } else {
                return(
                [ <li key={utils.getRandomUniqueId()} className={`${classes.item} ${classes.hasSubmenu} ${classes.button}`} ref={function (el) {
                    self.items.push(el)
                }} onClick={this.toggleItem}>
                    <a tabIndex="0">Login</a>
                    <ul className={classes.submenu}>
                         <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                            <Link to="/user/login">
                                Resident
                            </Link>
                        </li>
                         <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                            <Link to="/inspector/login">
                                Inspector
                            </Link>
                        </li>
                         <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                            <Link to="/admin/login">
                                Admin
                            </Link>
                        </li>
                    </ul>
                </li>,
                 <li key={utils.getRandomUniqueId()} className={`${classes.item} ${classes.button} ${classes.hasSubmenu}`} ref={function (el) {
                    self.items.push(el)
                }} onClick={this.toggleItem}><a>Sign Up</a>
                <ul className={classes.submenu}>
                         <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                            <Link to="/user/register">
                                Resident
                            </Link>
                        </li>
                         <li key={utils.getRandomUniqueId()} className={classes.subItem}>
                            <Link to="/inspector/register">
                                Inspector
                            </Link>
                        </li>
                    </ul>
                </li>]
                )
            }
        }
        let self = this
        return (<div>
            <nav>
                <ul id="menu" className={classes.menu} ref={function (el) {
                    self.menu = el;
                }}>
                     <li key={utils.getRandomUniqueId()} className={classes.logo}><a href="/"><strong>Siremar</strong></a></li>
                     <li key={utils.getRandomUniqueId()} className={classes.item} ref={function (el) {
                        self.items.push(el)
                    }} onClick={this.toggleItem}><Link to="/">Home</Link></li>
                    {this.state.pages.map(page => {
                       return (<li key={utils.getRandomUniqueId()} className={classes.item} ref={function (el) {
                           self.items.push(el)
                       }} onClick={this.toggleItem}><Link to={page.redirect}>{page.name}</Link></li>)
                    })}
                     <li key={utils.getRandomUniqueId()} className={classes.item} ref={function (el) {
                        self.items.push(el)
                    }} onClick={this.toggleItem}><a href={endPoints.blog}>Blog</a></li>
                    {isLogged()}
                     <li key={utils.getRandomUniqueId()} className={classes.toggle} onClick={this.toggleMenu} ref={function (el) {
                        self.toggle = el;
                    }}><a href="#">
                        {this.state.menuToggle ? <FontAwesomeIcon icon={faBars} size={"1x"}/> :
                            <FontAwesomeIcon icon={faTimes} size={"1x"}/>}
                    </a>
                    </li>
                </ul>
            </nav>
        </div>);
    }
}

export default NavBar;

