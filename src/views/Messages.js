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
      if (!user) {
        navigate(`/game/${gameId}`);
      }
    });
    return () => unsubscribe();
  }, [navigate, gameId]);

  return (
    <div>
      <Container>
        {loading && (
          <div className="text-center messages-loading-container d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && (
          <div className="text-center mt-5">
            <p className="text-danger">
              <strong>Error:</strong> Unable to load messages. Please try again
              later.
            </p>
          </div>
        )}
        {!loading && !error && (
          <>
            <ChatComponent messages={messagesState} />
            <MessageInput />
          </>
        )}
      </Container>
    </div>
  );
};
