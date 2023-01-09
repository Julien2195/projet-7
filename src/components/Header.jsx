import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Navigate } from "react-router-dom";
const Header = () => {
  const [goHome, setGoHome] = useState(false);
  if (goHome == true) {
    return <Navigate to="/" />;
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
          <li className="li-space">A Propos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
