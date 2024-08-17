import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const SignIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {!isSignedIn && (
        <Button variant="secondary" onClick={signInWithGoogle}>
          {" "}
          Sign In
        </Button>
      )}
      {isSignedIn && (
        <Button variant="secondary" onClick={logOut}>
          Log Out
        </Button>
      )}
    </div>
  );
};
