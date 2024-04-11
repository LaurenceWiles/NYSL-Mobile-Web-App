import React, { useContext,useEffect,useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import jsonData from './games.json';
import { useAuth } from './AuthContext';
import { MessageButton } from './MessageButton';
import { GalleryButton } from './GalleryButton';


const mapContainerStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', 
};

const iframeStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
};


export const GameDetails = () => {
     
    const { gameId } = useParams();
    
    const { isSignedIn } = useAuth();
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
                    <p>Address: {jsonData.locations[game.location].address}</p>
                    <Link to={{ pathname: `/game/messages/${gameId}`, state: { game } }}>
                    < MessageButton />
                    </Link>
                    <Link to={{ pathname: `/game/photos/${gameId}`, state: { game } }}>
                    < GalleryButton />
                    </Link>
                    <div style={mapContainerStyles}>
                            <iframe
                                title={`Map of ${game.location}`}
                                style={iframeStyles}
                                src={jsonData.locations[game.location].map_url}
                                allowFullScreen
                            ></iframe>
                        </div>
                </div>
            )}
            </Container>
        </div>
    )
}

