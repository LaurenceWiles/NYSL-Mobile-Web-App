import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./views/Home";
import { Schedule } from "./components/schedule";
import { Header } from "./components/Navbar";
import { GameDetails } from "./views/GameDetails";
import { SignIn } from "./components/SignIn";
import { Messages } from "./views/Messages";
import { AuthProvider } from "./AuthContext";
import { PhotoGallery } from "./views/PhotoGallery";

const Main = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = (expanded) => {
    setNavbarExpanded(expanded);
  };

  return (
    <AuthProvider>
      <div>
        <Header onNavbarToggle={handleNavbarToggle} />
        <div
          style={{
            marginTop: navbarExpanded ? "130px" : "0px",
            transition: "margin-top 0.3s ease-in-out",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule/*" element={<Schedule />} />
            <Route path="/game/:gameId" element={<GameDetails />} />
            <Route path="/game/messages/:gameId" element={<Messages />} />
            <Route path="/game/photos/:gameId" element={<PhotoGallery />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

const App = () => {
  return <Main />;
};

export default App;
