import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img">
        <img className="img-logo" src={logo} alt="logo KASA" />
      </div>
      <nav>
        <ul className="header-nav">
          <Link to="/" className="li li-border">
            <h2>Accueil</h2>
          </Link>
          <Link to="/about" className="li li-space">
            <h2>A Propos</h2>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
