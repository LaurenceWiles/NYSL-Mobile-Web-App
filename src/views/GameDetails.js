import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import jsonData from "../utils/games.json";
import { MessageButton } from "../components/MessageButton";
import { GalleryButton } from "../components/GalleryButton";

export const GameDetails = () => {
  const { gameId } = useParams();

  const game = jsonData.games[gameId];

  return (
    <div>
      <Container className="text-center">
        <h2 className="game-details-header">Game Details</h2>
        {game && (
          <div className="game-details-div">
            <p>Date: {game.date}</p>
            <p>Time: {game.time}</p>
            <p>Teams: {game.teams}</p>
            <p>Location: {game.location}</p>
            <p>Address: {jsonData.locations[game.location].address}</p>

            <div className="map-container">
              <iframe
                title={`Map of ${game.location}`}
                className="map-container-iframe"
                src={jsonData.locations[game.location].map_url}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="game-details-buttons d-flex justify-content-between">
          <Link to={{ pathname: `/game/messages/${gameId}` }}>
            <MessageButton />
          </Link>
          <Link to={{ pathname: `/game/photos/${gameId}` }}>
            <GalleryButton />
          </Link>
        </div>
      </Container>
    </div>
  );
};
