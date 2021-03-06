import React, {useRef, useState} from 'react';
import classes from './ChatWidget.module.css'
import utils from "../utils/Utilities";
import Socket from "../Socket/Socket";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkSlash} from "@fortawesome/free-solid-svg-icons";

const ChatWidget = () => {
    const unknownUser = localStorage.getItem(utils.CURRENT_UNKNOWN_USER);
    const unknownUserName = localStorage.getItem(utils.CURRENT_UNKNOWN_USER_NAME);
    const randomId = utils.getUniqueUserId()
    const currentUserId = utils.getCurrentUserId() ? utils.getCurrentUserId() : unknownUser ? unknownUser : randomId;
    const currentUserName = utils.getCurrentUserName() ? utils.getCurrentUserName() : (unknownUserName ? unknownUserName : ("John Doe " + randomId));
    localStorage.setItem(utils.CURRENT_UNKNOWN_USER, currentUserId);
    localStorage.setItem(utils.CURRENT_UNKNOWN_USER_NAME, currentUserName);
    const currentUserRole = utils.getRole(window.location.pathname);
    const chatLog = useRef();
    const [roomId, setRoomId] = useState(currentUserId);
    const [chatUserName, setChatUserName] = useState("Inspector");
    const {
        messages,
        users,
        typingUser,
        sendMessage,
        typingMessage
    } = Socket(roomId,
        currentUserId,
        currentUserName,
        currentUserRole);
    const [newMessage, setNewMessage] = React.useState("");
    const [menu, setMenu] = useState(currentUserRole === utils.USER_ROLES.RESIDENT ? 'C' : 'U');

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    const handleTypingMessage = (isTyping) => {
        typingMessage(currentUserName, isTyping);
    };

    const handleKeyDown = (e) => {
        handleTypingMessage(true)
        if (e.key === 'Enter') {
            handleSendMessage()
            const timer = setTimeout(() => {
                chatLog.current.scrollTop = chatLog.current.scrollHeight;
                clearTimeout(timer);
            }, 300);
        }
    }

    const loadChat = (e, user) => {
        e.preventDefault();
        if (user) {
            setRoomId(user.roomId)
        }
        setChatUserName(user.name)
        setMenu('C')
    }

    const handleKeyUp = (e) => {
        handleTypingMessage(false)
    }

    function RenderChatLog(props) {
        return <div className={classes.chatBorder}>
            <div className={classes.chatLog} ref={chatLog}>
                {messages.map((message, i) => (
                    <p key={utils.getRandomUniqueId()} className="chatLog">
                        <strong>{message.senderUserName}: </strong> {message.body}
                    </p>
                ))}
            </div>
            <input value={newMessage}
                   onChange={handleNewMessageChange}
                   autoComplete={"off"} autoFocus={true} type="text" name="chat"
                   onKeyDown={handleKeyDown}
                   onKeyUp={handleKeyUp}
                   className={classes.chatBox} placeholder="Message"/>
            {typingUser && typingUser.isTyping && <span>{typingUser.senderUserName} is Typing</span>}
        </div>
    }

    function RenderUserList(props) {
        return <div className={classes.chatBorder}>
            <div className={classes.chatLog}>
                {
                    (<div className={classes.chatLog}>
                        <ul>
                            {users.map((user, i) => {
                                return (
                                    <li key={utils.getRandomUniqueId()}>
                                        {
                                            user.roomId !== roomId &&
                                            <button key={utils.getRandomUniqueId()} onClick={(e) => loadChat(e, user)}>
                                                <strong>{user.name}</strong>
                                            </button>
                                        }
                                    </li>
                                )
                            })}
                            {users.length <= 0 && <h2><FontAwesomeIcon icon={faLinkSlash}/> No Users Online</h2>}
                        </ul>
                    </div>)
                }
            </div>
        </div>;
    }

    return (
        <div className={classes.chatContainer}>
            {(menu === 'U' && <h2>Select a User</h2>)}
            {(menu === 'C' && <h2>Chat with {chatUserName}</h2>)}
            {(menu === 'C' && <RenderChatLog/>) || (menu === 'U' && <RenderUserList/>)}
        </div>
    );
}

ChatWidget.propTypes = {};

export default ChatWidget;
