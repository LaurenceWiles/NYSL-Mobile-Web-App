import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Schedule } from "./components/schedule";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/navbar";
import { GameDetails } from "./components/GameDetails";
import { SignIn } from "./components/SignIn";
import { Messages } from "./components/Messages";
import { AuthProvider } from "./components/AuthContext";
import { PhotoGallery } from "./components/PhotoGallery";

const Main = () => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/*" element={<Schedule />} />
          <Route path="/game/:gameId" element={<GameDetails />} />
          <Route path="/game/messages/:gameId" element={<Messages />} />
          <Route path="/game/photos/:gameId" element={<PhotoGallery />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

const App = () => {
  return <Main />;
};

export default App;
