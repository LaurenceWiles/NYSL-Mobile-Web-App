import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { auth } from "../config/firebase";

export const AuthButton = ({ text }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return <div>{isLoggedIn && <Button>{text}</Button>}</div>;
};
