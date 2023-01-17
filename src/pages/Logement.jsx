import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import vectorLeft from "../assets/vector-left.png";
import vectorRight from "../assets/vector-right.png";
import rate from "../assets/rating.svg";
import rateEmpty from "../assets/rating-empty.svg";

const Logement = () => {
  let params = useParams();
  const [logement, setLogement] = useState(null);
  const [showImg, setShowImg] = useState(0);

  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        setLogement(data.find((logement) => logement.id === params.id));
      });
  }, []);
  const handleNext = () => {
    setShowImg(showImg === logement.pictures.length - 1 ? 0 : showImg + 1);
  };

  const handlePrevious = () => {
    setShowImg(showImg === 0 ? logement.pictures.length - 1 : showImg - 1);
  };

  return (
    <div>
      <Header />
      {logement && (
        <div className="slidesShow-image">
          <img
            onClick={handlePrevious}
            className="vector-left"
            src={vectorLeft}
            alt="fleche gauche"
          />
          <img
            onClick={handleNext}
            className="vector-right"
            src={vectorRight}
            alt="fleche droite"
          />
          <img
            className="slidesShow-image"
            src={logement.pictures[showImg]}
            alt={logement.title}
          />
          <span className="number">{`${showImg + 1}/${
            logement.pictures.length
          }`}</span>
          <div className="infos-logement">
            <div>
              <h2 className="logement-title">{logement.title}</h2>
              <h3 className="logement-location">{logement.location}</h3>
            </div>
            <div className="host-container">
              <h4 className="logement-name">{logement.host.name}</h4>
              <img
                className="logement-picture-host"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
          </div>
          <div className="tags-container">
            {logement.tags.map((element, i) => (
              <span key={i} className="tag-name">
                {element}
              </span>
            ))}
          </div>
          <div className="rating-container">
            {typeof logement.rating === "string"
              ? Array.from({ length: parseInt(logement.rating) }, (_, i) => (
                  <img key={i} src={rate} alt="Etoiles pleines" />
                ))
              : null}
            {typeof logement.rating === "string"
              ? Array.from(
                  { length: 5 - parseInt(logement.rating) },
                  (_, i) => <img key={i} src={rateEmpty} alt="Etoiles vide " />
                )
              : null}
          </div>
        </div>
      )}
    </div>
  );
};
export default Logement;
