import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import useSubmitMessage from "../hooks/useSubmitMessage";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const userEmail = useAuthUser();
  const { gameId } = useParams();

  const { submitMessage, isSending, error } = useSubmitMessage(
    gameId,
    userEmail
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMessage(message, () => setMessage(""));
  };

  return (
    <Form onSubmit={handleSubmit}>
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
              disabled={isSending}
            />
            <Button
              variant="primary"
              type="submit"
              className="btn-circle custom-btn-circle d-flex justify-content-center align-items-center ms-1"
              disabled={isSending || !message.trim()}
            >
              <BsArrowRight />
            </Button>
          </Form.Group>
        </div>
        {error && <p className="text-danger mt-2">{error}</p>}
      </Container>
    </Form>
  );
};
