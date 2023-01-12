import React from "react";
import logoFooter from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logoFooter} alt="Logo Kasa " />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
