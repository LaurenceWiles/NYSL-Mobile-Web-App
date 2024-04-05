import React, { useRef, useLayoutEffect } from "react";
import { Container, } from 'react-bootstrap';

export const ChatComponent = ({ messages }) => {

    const messageList = messages ? Object.values(messages) : [];

    const sortedMessages = messageList.slice().sort((a, b) => {
        const timestampA = a.timestamp;
        const timestampB = b.timestamp;
        return timestampA - timestampB;
    });

    const chatContainerRef = useRef(null);

    useLayoutEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

   return (
      <Container>
        <h2>Message Board</h2>
            <div ref={chatContainerRef} className="container chat-container">
                {sortedMessages.map((message, index) => (
                        <div key={`message-${index}`} className="chat">
                            <div className="chat-body">
                                <div className="chat-name">{message.author}</div>
                                <div className="chat-message">{message.text}</div>
                                <div className="chat-time">{new Date(message.timestamp).toLocaleString()}</div>
                            </div>
                        </div>
                    ))}
                {sortedMessages.length === 0 && <div><p>No messages available</p></div>}
            </div>
      </Container>
    );
  };