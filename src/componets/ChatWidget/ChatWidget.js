import React, {Component} from 'react';
import classes from './ChatWidget.module.css'

class ChatWidget extends Component {
    render() {
        return (
            <div id='bodybox'>
                <div className={classes.chatBorder}>
                    <p className="chatLog">&nbsp;</p>
                    <input type="text" name="chat" className={classes.chatBox} placeholder="Message"
                           onFocus="placeHolder()"/>
                </div>
            </div>
        );
    }
}

ChatWidget.propTypes = {};

export default ChatWidget;
