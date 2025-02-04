import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";

export const useAuthRedirect = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate(`/game/${gameId}`);
      }
    });

    return () => unsubscribe();
  }, [navigate, gameId]);

  return user;
};
