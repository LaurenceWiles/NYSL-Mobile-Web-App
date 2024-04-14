import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Schedule } from './components/schedule';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Header } from './components/navbar';
import { GameDetails } from './components/GameDetails';
import { GamesTable } from './components/GamesTable';
import jsonData from './components/games.json'
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from 'react';
import { app, auth } from './components/firebase';
import { SignIn } from './components/SignIn'
import { Messages } from './components/Messages';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { AuthProvider } from './components/AuthContext';
import { PhotoGallery } from './components/PhotoGallery';



const Main = () => {
  
  return (
    <AuthProvider>
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/*" element={<Schedule />} />
          <Route path="/game/:gameId" element={<GameDetails />} />  
          <Route path="/game/messages/:gameId" element={<Messages />} />
          <Route path="/game/photos/:gameId" element={<PhotoGallery />} />
          <Route path="/signin" element={<SignIn />} />
          </Routes>
    </div>
    </AuthProvider>
  )
}


const App = () => {
  return (
    <Main />
  );
}

export default App;












