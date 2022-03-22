import React, {Component} from 'react';
import classes from "./Card.module.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.children = props.children;
    }
    render() {
        return (
                <div className={classes.card}>
                    <div className={classes.title}>{this.title}</div>
                    <div className={classes.content}>
                        {this.children}
                    </div>
                </div>
        );
    }
}

Card.propTypes = {};

export default Card;
