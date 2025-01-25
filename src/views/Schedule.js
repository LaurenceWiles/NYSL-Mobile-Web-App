import { Container } from "react-bootstrap";
import { GamesTable } from "../components/GamesTable";
import jsonData from "../utils/games.json";

export const Schedule = () => {
  return (
    <div className="schedule-div">
      <Container>
        <h2 className="text-center schedule-header">Games Schedule</h2>
        <GamesTable jsonData={jsonData} />
      </Container>
    </div>
  );
};
