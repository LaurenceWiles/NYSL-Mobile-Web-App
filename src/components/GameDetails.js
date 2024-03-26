import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import jsonData from './games.json'


export const GameDetails = () => {
    const { gameId } = useParams();
    console.log({ gameId });
    const game = jsonData.games[gameId];
    return (
        <div>
            <Container>
           <h2>Game Details</h2>
            {game && (
                <div>
                    <p>Date: {game.date}</p>
                    <p>Time: {game.time}</p>
                    <p>Teams: {game.teams}</p>
                    <p>Location: {game.location}</p>
                </div>
            )}
            </Container>
        </div>
    )
}

