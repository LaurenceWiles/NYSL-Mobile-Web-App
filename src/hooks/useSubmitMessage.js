import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";

const useSubmitMessage = (gameId, userEmail) => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const submitMessage = async (message, resetMessage) => {
    if (!message.trim()) return;
    setIsSending(true);

    try {
      const db = getDatabase();
      const messagesRef = ref(db, `messages/${gameId}`);
      await push(messagesRef, {
        author: userEmail,
        text: message,
        timestamp: Date.now(),
      });
      resetMessage();
    } catch (err) {
      console.error("Error adding message:", err);
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  };

  return { submitMessage, isSending, error };
};

export default useSubmitMessage;
