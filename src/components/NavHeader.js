import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../utils/asset/nysl_logo.png";
import { SignIn } from "./SignIn";
import { useClickOutside } from "../hooks/useClickOutside";

export const NavHeader = ({ onNavbarToggle }) => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  useClickOutside(navbarRef, () => {
    setExpanded(false);
    onNavbarToggle(false);
  });

  useEffect(() => {
    setExpanded(false);
    onNavbarToggle(false);
  }, [location.pathname, onNavbarToggle]);

  return (
    <div ref={navbarRef}>
      <Navbar
        expand="md"
        className="bg-body-tertiary"
        fixed="top"
        bg="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width={60} alt="NYSL Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
