import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img">
        <img className="img-logo" src={logo} alt="logo KASA" />
      </div>
      <nav>
        <ul className="header-nav">
          <li className="li-border">Accueil</li>
          <li className="li-space">A Propos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
