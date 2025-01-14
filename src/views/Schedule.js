import React from "react";
import { Container } from "react-bootstrap";
import { GamesTable } from "../components/GamesTable";
import jsonData from "../utils/games.json";

export const Schedule = () => {
  return (
    <div>
      <Container>
        <GamesTable jsonData={jsonData} />
      </Container>
    </div>
  );
};
