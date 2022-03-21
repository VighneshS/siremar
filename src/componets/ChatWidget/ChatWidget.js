import React, {Component} from 'react';
import classes from './ChatWidget.module.css'
import utils from "../utils/Utilities";

const ChatLog = (props) => {
    if (props.from) {
        return <p key={utils.getRandomUniqueId()} className="chatLog"><strong>{props.from}: </strong> {props.message}
        </p>
    } else {
        return <p key={utils.getRandomUniqueId()} className="chatLog">&nbsp;</p>
    }
}

function renderChatLogHTML(message, from) {
    return <ChatLog message={message} from={from}/>;
}

class ChatWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
        this.chatInput = null
        this.chatLog = null

        for (let i = 0; i < 0; i++)
            this.state.messages.push(renderChatLogHTML("&nbsp;", null))
        this.state.messages.push(renderChatLogHTML("Hai", "Inspector"))
        this.state.messages.push(renderChatLogHTML("How can I help you today?", "Inspector"))
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                messages: [...this.state.messages, renderChatLogHTML(e.target.value, "Me")],
            });
            if (this.chatInput) {
                this.chatInput.value = "";
                this.chatInput.focus();
                const chatLog = this.chatLog
                const timer = setTimeout(() => {
                    chatLog.scrollTop = chatLog.scrollHeight;
                    clearTimeout(timer);
                }, 300);
            }
        }
    }

    render() {
        let self = this;
        return (
            <div className={classes.chatContainer}>
                <h2>Chat with Inspector</h2>
                <div className={classes.chatBorder}>
                    <div className={classes.chatLog} ref={function (el) {
                        console.log("Here");
                        self.chatLog = el
                    }}>
                        {this.state.messages}
                    </div>
                    <input autoComplete={"off"} autoFocus={true} type="text" name="chat" onKeyDown={this.handleKeyDown}
                           ref={function (el) {
                               self.chatInput = el
                           }} className={classes.chatBox} placeholder="Message"/>
                </div>
            </div>
        );
    }
}

ChatWidget.propTypes = {};

export default ChatWidget;
