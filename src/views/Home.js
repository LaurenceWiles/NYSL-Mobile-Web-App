import { Container } from "react-bootstrap";
import { Picture } from "../components/Picture";
import { HeadingText } from "../components/HeadingText";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <Container className="home-container text-center">
        <HeadingText />
        <Picture />
        <About />
        <Contact />
      </Container>
    </div>
  );
};
