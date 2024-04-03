import React from "react";
import { Container, Image } from 'react-bootstrap';
import jsonData from '../utils/Messages.json'
import {useParams} from 'react-router-dom';


export const Messages = () => {

   
    return (
        <div>
            <Container>
                <ChatComponent jsonData={jsonData.messages}/>
            </Container>
        </div>
    )

}

const ChatComponent = ({ jsonData }) => {

    const { gameId } = useParams();
    const messagesForGame = jsonData[gameId] || {};
    const sortedMessages = Object.values(messagesForGame).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
   return (
      <Container>
        <h2>Message Board</h2>
          <div className="container chat-container">
                {sortedMessages.length > 0 ? (
                    sortedMessages.map((message, index) => (
                        <div key={`message-${index}`} className="chat">
                            
                            <div className="chat-body">
                                <div className="chat-name">{message.author}</div>
                                <div className="chat-message">{message.text}</div>
                                <div className="chat-time">{new Date(message.timestamp).toLocaleString()}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div><p>No messages available</p></div>
                )}
            </div>
      </Container>
    );
  };


 