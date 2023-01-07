import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="img-logo" src={logo} alt="logo KASA" />
      <nav>
        <ul>
          <li className="li-border">Accueil</li>
          <li className="li-space">A Propos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
