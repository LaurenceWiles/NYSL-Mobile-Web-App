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