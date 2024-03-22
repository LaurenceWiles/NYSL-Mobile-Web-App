import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { GamesTable } from './GamesTable';
import { useState, useEffect } from 'react';
import jsonData from './games.json'



export const Schedule = () => {
  return (
    <div>
      <Container>
      <GamesTable jsonData={jsonData} />
      </Container>
    </div>
  )
}



