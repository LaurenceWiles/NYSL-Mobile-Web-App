import { useEffect, useState } from "react";
import { onValue } from "firebase/database";

const useMessages = (messagesRef) => {
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

  return { messagesState, loading, error };
};

export default useMessages;
