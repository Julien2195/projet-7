import React, { useState } from "react";
import vectorLeft from "../assets/vector-left.png";
import vectorRight from "../assets/vector-right.png";
const Gallery = ({ logement }) => {
  const [showImg, setShowImg] = useState(0);
  const handleNext = () => {
    setShowImg(showImg === logement.pictures.length - 1 ? 0 : showImg + 1);
  };

  const handlePrevious = () => {
    setShowImg(showImg === 0 ? logement.pictures.length - 1 : showImg - 1);
  };

  return (
    <div>
      <img
        onClick={handlePrevious}
        className={
          logement.pictures.length > 1 ? "vector-left" : "vector-left-off"
        }
        src={vectorLeft}
        alt="fleche gauche"
      />

      <img
        onClick={handleNext}
        className={
          logement.pictures.length > 1 ? "vector-right" : "vector-right-off"
        }
        src={vectorRight}
        alt="fleche droite"
      />
      <img
        className="slidesShow-image"
        src={logement.pictures[showImg]}
        alt={logement.pictures.title}
      />
      <span className="number">{`${showImg + 1}/${
        logement.pictures.length
      }`}</span>
    </div>
  );
};

export default Gallery;
