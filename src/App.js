import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Schedule } from './components/schedule';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Header } from './components/navbar';

const Main = () => {
  return (
    <div>
      <Header />
    </div>
  )
}


const App = () => {
  return (
    <Main />
  );
}

export default App;