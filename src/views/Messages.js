import { useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDatabase, ref } from "firebase/database";
import { MessageInput } from "../components/MessageInput";
import { ChatComponent } from "../components/ChatComponent";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import useMessages from "../hooks/useMessages";

export const Messages = () => {
  const { gameId } = useParams();
  useAuthRedirect();
  const db = getDatabase();
  const messagesRef = useMemo(
    () => ref(db, `/messages/${gameId}`),
    [db, gameId]
  );

  const { messagesState, loading, error } = useMessages(messagesRef);

  return (
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
  );
};
