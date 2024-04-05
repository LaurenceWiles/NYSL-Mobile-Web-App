import React, { useEffect, useState, } from "react";
import { Container, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { getDatabase, ref, onValue, off } from "firebase/database";
import { MessageInput } from "./MessageInput";
import { ChatComponent } from "./ChatComponent";


export const Messages = () => {
    const { gameId } = useParams();
    const db = getDatabase(); 
    const messagesRef = ref(db, `/messages/${gameId}`);
    const [messagesState, setMessagesState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (JSON.stringify(data) !== JSON.stringify(messagesState)) {
                setMessagesState(data);
            }
            setLoading(false); 
        }, (error) => {
            setError(error); 
            setLoading(false); 
        });
    
        return () => {
            off(messagesRef, 'value', unsubscribe);
        };
    }, [messagesRef, messagesState]); 
    

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
                <ChatComponent messages={messagesState}/>
                <MessageInput />
            </Container>
        </div>
    )

}



 