import { Container } from "react-bootstrap";
import { GamesTable } from "../components/GamesTable";
import jsonData from "../utils/games.json";

export const Schedule = () => {
  return (
    <div className="schedule-div">
      <Container>
        <div className="text-center schedule-header">
          <h2>Games Schedule</h2>
          <p>Select a game to see location details and more...</p>
        </div>
        <GamesTable jsonData={jsonData} />
      </Container>
    </div>
  );
};
