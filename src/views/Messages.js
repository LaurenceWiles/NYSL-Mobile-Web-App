import { useEffect, useState, useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { MessageInput } from "../components/MessageInput";
import { ChatComponent } from "../components/ChatComponent";
import { auth } from "../firebase";

export const Messages = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const db = getDatabase();
  const messagesRef = useMemo(
    () => ref(db, `/messages/${gameId}`),
    [db, gameId]
  );

  const [messagesState, setMessagesState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    return unsubscribe;
  }, [messagesRef]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        navigate(`/game/${gameId}`);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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
