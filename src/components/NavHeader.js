import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../utils/asset/nysl_logo.png";
import { SignIn } from "./SignIn";

export const NavHeader = ({ onNavbarToggle }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    onNavbarToggle(!expanded);
  };

  return (
    <div>
      <Navbar
        expand="md"
        className="bg-body-tertiary"
        fixed="top"
        bg="dark"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width={60} alt="NYSL Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/schedule">
                Schedule
              </Nav.Link>
            </Nav>
            <Nav>
              <SignIn />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
