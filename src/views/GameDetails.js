import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import jsonData from "../utils/games.json";
import { useAuth } from "../AuthContext";
import { MessageButton } from "../components/MessageButton";
import { GalleryButton } from "../components/GalleryButton";

export const GameDetails = () => {
  const { gameId } = useParams();

  const { isSignedIn } = useAuth();
  const game = jsonData.games[gameId];

  return (
    <div>
      <Container className="text-center">
        <h2>Game Details</h2>
        {game && (
          <div>
            <p>Date: {game.date}</p>
            <p>Time: {game.time}</p>
            <p>Teams: {game.teams}</p>
            <p>Location: {game.location}</p>
            <p>Address: {jsonData.locations[game.location].address}</p>
            <Link
              to={{ pathname: `/game/messages/${gameId}`, state: { game } }}
            >
              <MessageButton />
            </Link>
            <Link to={{ pathname: `/game/photos/${gameId}`, state: { game } }}>
              <GalleryButton />
            </Link>
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
      </Container>
    </div>
  );
};
