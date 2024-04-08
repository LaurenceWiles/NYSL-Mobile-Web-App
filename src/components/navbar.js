import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Home } from './home';
import { Schedule } from './schedule';
import logo from '../utils/asset/nysl_logo.png';
import Image from 'react-bootstrap/Image';
import { GameDetails } from './GameDetails';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { SignIn } from './SignIn';
import { useAuth } from './AuthContext';

export const Header = () => {

  
  return (
    <div>
    <Navbar expand="md" className="bg-body-tertiary" fixed='top' bg='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo}
            width={60}
            alt='NYSL Logo' />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
          </Nav>
          <Nav>
              <SignIn />
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}



