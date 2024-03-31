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
import { useEffect } from 'react';
import { app } from './components/firebase';
import { SignIn } from './components/SignIn'





const Main = () => {
  
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/*" element={<Schedule />} />
          <Route path="/game/:gameId" element={<GameDetails />} />  
          </Routes>
    </div>
  )
}


const App = () => {
  return (
    <Main />
  );
}

export default App;

