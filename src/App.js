import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Schedule } from './components/schedule';
import './App.css';

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <Main />
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    BrowserRouter>
        <Routes>
            <Route path='/' element ={ <Home /> }/>
            <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </BrowserRouter>

*/