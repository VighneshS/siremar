import socketIOClient from "socket.io-client";
import {NEW_CHAT_MESSAGE_EVENT, TYPING_CHAT_MESSAGE_EVENT, USERS_EVENT, WS_HOST} from "../../App";
import React, {useEffect, useRef, useState} from "react";
import utils from "../utils/Utilities";

const Socket = (roomId, userId, name, roleCode) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [typingUser, setTypingUser] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(WS_HOST, {
            query: {roomId, name}
        });
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            if (roomId === message.senderUserId) {
                const incomingMessage = {
                    ...message,
                };
                setMessages((messages) => [...messages, incomingMessage]);
            }
        });

        socketRef.current.on(TYPING_CHAT_MESSAGE_EVENT, (data) => {
            if (roomId === data.senderUserId) {
                setTypingUser(data);
            }
        });

        if (roleCode !== utils.USER_ROLES.RESIDENT) {
            socketRef.current.on(USERS_EVENT, (response) => {
                const data = response.filter(d => JSON.parse(d).roomId !== userId).map(d => JSON.parse(d))
                setUsers(data);
            });
        }

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId, name, roleCode]);

    const sendMessage = (messageBody) => {
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
            senderUserId: roomId,
            senderUserName: name
        });
    };

    const typingMessage = (userName, isTyping) => {
        socketRef.current.emit(TYPING_CHAT_MESSAGE_EVENT, {
            senderId: socketRef.current.id,
            isTyping: isTyping,
            senderUserId: roomId,
            senderUserName: userName
        });
    };
    return {messages, users, typingUser, sendMessage, typingMessage};
}

export default Socket;
