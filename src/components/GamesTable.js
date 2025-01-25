import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const GamesTable = ({ jsonData }) => {
  const gamesData = Object.entries(jsonData.games) || [];
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Teams</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {gamesData.map(([gameID, game]) => (
            <tr key={gameID}>
              <td>
                <Link to={{ pathname: `/game/${gameID}`, state: { game } }}>
                  {game.date}
                </Link>
              </td>
              <td>{game.time}</td>
              <td>{game.teams}</td>
              <td>{game.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
