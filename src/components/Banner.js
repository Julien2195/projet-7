import React from "react";
import banniere from "../assets/banniere.png";
const Banner = () => {
  return (
    <div className="banner">
      <img src={banniere} alt="banniere" />
      <span>Chez vous, partout et ailleurs</span>
    </div>
  );
};

export default Banner;
