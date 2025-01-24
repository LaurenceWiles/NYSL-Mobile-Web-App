import { Container } from "react-bootstrap";
import { HomePicture } from "../components/HomePicture";
import { HeadingText } from "../components/HeadingText";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <Container className="home-container text-center">
        <HeadingText />
        <HomePicture />
        <About />
        <Contact />
      </Container>
    </div>
  );
};
