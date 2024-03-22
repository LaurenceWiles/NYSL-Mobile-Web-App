import React from "react";
import Table from 'react-bootstrap/Table';

export const GamesTable = ({ jsonData }) => {
    const gamesData = Object.values(jsonData.games) || [];
    return (
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
        {gamesData.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.teams}</td>
            <td>{item.location}</td>
          </tr>
        ))}
        </tbody>
        </Table>
    );
  }
  