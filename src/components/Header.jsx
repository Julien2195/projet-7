import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-img">
        <Link to="/">
          <img className="img-logo" src={logo} alt="logo KASA" />
        </Link>
      </div>
      <nav>
        <ul className="header-nav">
          <Link to="/" className="li li-border">
            <h2
              style={
                props.showBorder ? { borderBottom: "2px solid #FF6060" } : null
              }
            >
              Accueil
            </h2>
          </Link>
          <Link to="/about" className="li li-space">
            <h2
              style={
                props.showBorder2 ? { borderBottom: "2px solid #FF6060" } : null
              }
            >
              A Propos
            </h2>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
