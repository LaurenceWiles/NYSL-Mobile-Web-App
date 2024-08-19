import React from "react";
import { Container } from "react-bootstrap";
import { Picture } from "./Picture";
import { HeadingText } from "./HeadingText";
import { About } from "./About";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div>
      <Container className="home-container">
        <HeadingText />
        <Picture />
        <About />
        <Contact />
      </Container>
    </div>
  );
};
