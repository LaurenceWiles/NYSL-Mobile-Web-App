import React from "react";
import { Container, Image } from 'react-bootstrap';
import jsonData from '../utils/Messages.json'
import {useParams} from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./firebase";
import { useList } from 'react-firebase-hooks/database';


export const Messages = () => {
    const { gameId } = useParams();
    const db = getDatabase(); // this is line 12
    const messagesRef = ref(db, `/messages/${gameId}`);
    const [messages, loading, error] = useList(messagesRef);

    if (loading) {
        return <p>Loading messages...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
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

   
   return (
      <Container>
        <h2>Message Board</h2>
            <div className="container chat-container">
                {messages && messages.map((messageSnapshot, index) => {
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
                {!messages || messages.length === 0 && <div><p>No messages available</p></div>}
            </div>
      </Container>
    );
  };


 