import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";
import { useParams } from "react-router-dom";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { gameId } = useParams();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });
  }, []);

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
    <Form className="fixed-bottom" onSubmit={handleMessageSubmit}>
      <Container className="mb-3">
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
            className="btn-circle custom-btn-circle"
          >
            <BsArrowRight />
          </Button>
        </Form.Group>
      </Container>
    </Form>
  );
};
