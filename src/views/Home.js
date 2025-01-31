import { Container } from "react-bootstrap";
import { HomePicture } from "../components/HomePicture";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <Container className="home-container text-center">
        <h1 className="heading-text">Northside Youth Soccer League</h1>
        <HomePicture />
        <About />
        <Contact />
      </Container>
    </div>
  );
};
