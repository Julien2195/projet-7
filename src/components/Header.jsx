import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Navigate } from "react-router-dom";
const Header = () => {
  const [goHome, setGoHome] = useState(false);
  const [goAbout, setGoAbout] = useState(false);
  if (goHome) {
    return <Navigate to="/" />;
  }
  if (goAbout) {
    return <Navigate to="/about" />;
  }

  return (
    <div className="header-container">
      <div className="header-img">
        <img className="img-logo" src={logo} alt="logo KASA" />
      </div>
      <nav>
        <ul className="header-nav">
          <li
            onClick={() => {
              setGoHome(true);
            }}
            className="li-border"
          >
            Accueil
          </li>
          <li
            onClick={() => {
              setGoAbout(true);
            }}
            className="li-space"
          >
            A Propos
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
