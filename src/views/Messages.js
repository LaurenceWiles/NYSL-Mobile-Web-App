import { useEffect, useState, useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { MessageInput } from "../components/MessageInput";
import { ChatComponent } from "../components/ChatComponent";

export const Messages = () => {
  const { gameId } = useParams();
  const db = getDatabase();
  const messagesRef = useMemo(
    () => ref(db, `/messages/${gameId}`),
    [db, gameId]
  );

  const [messagesState, setMessagesState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(
      messagesRef,
      (snapshot) => {
        setMessagesState(snapshot.val());
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
    return () => {
      off(messagesRef, "value");
    };
  }, [messagesRef]);

  if (loading) {
    return (
      <Container className="text-center messages-loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <p className="text-danger">
          <strong>Error:</strong> Unable to load messages. Please try again
          later.
        </p>
      </Container>
    );
  }
  return (
    <div>
      <Container>
        <ChatComponent messages={messagesState} />
        <MessageInput />
      </Container>
    </div>
  );
};
