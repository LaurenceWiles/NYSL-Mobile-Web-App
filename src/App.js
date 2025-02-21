import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./views/Home";
import { Schedule } from "./views/Schedule";
import { NavHeader } from "./components/NavHeader";
import { GameDetails } from "./views/GameDetails";
import { SignIn } from "./components/SignIn";
import { Messages } from "./views/Messages";
import { PhotoGallery } from "./views/PhotoGallery";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

const App = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = (expanded) => {
    setNavbarExpanded(expanded);
  };

  return (
    <AuthProvider>
      <div className="main-wrapper">
        <NavHeader onNavbarToggle={handleNavbarToggle} />
        <div className={`content ${navbarExpanded ? "expanded" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule/*" element={<Schedule />} />
            <Route path="/game/:gameId" element={<GameDetails />} />
            <Route path="/game/messages/:gameId" element={<Messages />} />
            <Route path="/game/photos/:gameId" element={<PhotoGallery />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
