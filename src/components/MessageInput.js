import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { getDatabase, ref, push } from "firebase/database";
import { useParams } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const userEmail = useAuthUser();
  const { gameId } = useParams();

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const messagesRef = ref(db, `messages/${gameId}`);
    const timestamp = new Date().getTime();
    const messageData = {
      author: userEmail,
      text: message,
      timestamp: timestamp,
    };
    push(messagesRef, messageData)
      .then(() => {
        setMessage("");
      })
      .catch((error) => {
        console.error("Error adding message: ", error);
      });
  };

  return (
    <Form onSubmit={handleMessageSubmit}>
      <Container className="mb-3">
        <div className="message-input-div">
          <Form.Group
            controlId="messageForm"
            className="d-flex align-items-center"
          >
            <Form.Control
              type="text"
              placeholder="Type your message here..."
              className="flex-grow-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              className="btn-circle custom-btn-circle d-flex justify-content-center align-items-center ms-1"
            >
              <BsArrowRight />
            </Button>
          </Form.Group>
        </div>
      </Container>
    </Form>
  );
};
