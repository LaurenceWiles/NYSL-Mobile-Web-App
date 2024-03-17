import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Sept = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sept</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>9/01</td>
          <td>U1 and U4</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U3 and U2</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>9/08</td>
          <td>U5 and U6</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U6 and U1</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>9/15</td>
          <td>U2 and U4</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U3 and U5</td>
          <td>AJ Katzenmaier</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>9/22</td>
          <td>U1 and U3</td>
          <td>South</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U2 and U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>9/29</td>
          <td>U4 and U5</td>
          <td>Greenbay</td>
          <td>9:30 a.m.</td>
        </tr>
      </tbody>
      </Table>
  );
}

const Oct = () => {
  return (
  <Table striped bordered hover>
     <thead>
        <tr>
          <th>Oct</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>10/06</td>
          <td>U2 and U5</td>
          <td>Marjorie P Hart</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U1 and U6</td>
          <td>South</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>10/13</td>
          <td>U3 and U4</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U5 and U1</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>10/20</td>
          <td>U6 and U3</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U2 and U4</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td>10/27</td>
          <td>U3 and U1</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td></td>
          <td>U5 and U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        </tr>
        </tbody>
  </Table>
  );
}

export const Schedule = () => {
  return (
    <div>
      <Container>
      <Sept />
      <Oct />
      </Container>
    </div>
  )
}

