import React from 'react';
import classes from './Chat.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import ChatWidget from "../ChatWidget/ChatWidget";


const Chat = () => {
    const [showChatWidget, setShowChatWidget] = React.useState(false)
    const onClick = () => setShowChatWidget(!showChatWidget)
    return (<div className={classes.fab}>
        {showChatWidget ? <ChatWidget/> : null}
        <button href="#" onClick={onClick} className={classes.chatBtn}><FontAwesomeIcon icon={faComment} size={"2x"}/>
        </button>
    </div>);
}

export default Chat;

