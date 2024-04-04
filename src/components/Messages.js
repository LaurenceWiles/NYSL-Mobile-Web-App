import React from "react";
import { Container, Image, Spinner } from 'react-bootstrap';
import jsonData from '../utils/Messages.json'
import {useParams} from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./firebase";
import { useList } from 'react-firebase-hooks/database';



export const Messages = () => {
    const { gameId } = useParams();
    const db = getDatabase(); 
    const messagesRef = ref(db, `/messages/${gameId}`);
    const [messages, loading, error] = useList(messagesRef);

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return <p>Error fetching messages: {error.message}</p>;
    }
    return (
        <div>
            <Container>
                <ChatComponent messages={messages}/>
            </Container>
        </div>
    )

}

const ChatComponent = ({ messages }) => {

    const sortedMessages = messages.slice().sort((a, b) => {
        const timestampA = a.val().timestamp;
        const timestampB = b.val().timestamp;
        return timestampA - timestampB;
    });

    const reversedMessages = sortedMessages.reverse();

   return (
      <Container>
        <h2>Message Board</h2>
            <div className="container chat-container">
                {reversedMessages && reversedMessages.map((messageSnapshot, index) => {
                    const message = messageSnapshot.val();
                    return (
                        <div key={`message-${index}`} className="chat">
                            <div className="chat-body">
                                <div className="chat-name">{message.author}</div>
                                <div className="chat-message">{message.text}</div>
                                <div className="chat-time">{new Date(message.timestamp).toLocaleString()}</div>
                            </div>
                        </div>
                    );
                })}
                {!reversedMessages || reversedMessages.length === 0 && <div><p>No messages available</p></div>}
            </div>
      </Container>
    );
  };


 