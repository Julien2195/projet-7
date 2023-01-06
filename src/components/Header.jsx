import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="img-logo" src={logo} alt="logo KASA" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
