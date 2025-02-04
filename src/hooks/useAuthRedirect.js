import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";

export const useAuthRedirect = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : navigate(`/game/${gameId}`);
    });

    return () => unsubscribe();
  }, [navigate, gameId]);

  return user;
};
