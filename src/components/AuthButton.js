import { useEffect, useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { auth } from "../config/firebase";

export const AuthButton = ({ text, disabledMessage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <OverlayTrigger
      placement="top"
      overlay={!isLoggedIn ? <Tooltip>{disabledMessage}</Tooltip> : <></>}
    >
      <span className="d-inline-block">
        <Button
          disabled={!isLoggedIn}
          style={{ pointerEvents: !isLoggedIn ? "auto" : "inherit" }}
        >
          {text}
        </Button>
      </span>
    </OverlayTrigger>
  );
};
