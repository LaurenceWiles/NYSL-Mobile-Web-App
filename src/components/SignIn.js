
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { app } from "./firebase";


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


export const SignIn = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user); 
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth, googleProvider);
    } catch (err){
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  
  return (
    <div>
      {!isSignedIn && <Button variant="secondary" onClick={signInWithGoogle}> Sign In</Button>}
      {isSignedIn && <Button variant="secondary" onClick={logOut}>Log Out</Button>}
    </div>
  )
}

