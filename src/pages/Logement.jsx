import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import vectorLeft from "../assets/vector-left.png";
import vectorRight from "../assets/vector-right.png";
import filledStars from "../assets/rating.svg";
import emptyStars from "../assets/rating-empty.svg";
import Collapse from "../components/Collapse";

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

      <div className="logement-container">
        {logement && (
          <div className="slidesShow-image-container">
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
            <div className="container">
              <div>
                <h2 className="logement-title">{logement.title}</h2>
                <h3 className="logement-location">{logement.location}</h3>

                <div className="tags-container">
                  {logement.tags.map((element, i) => (
                    <span key={i} className="tag-name">
                      {element}
                    </span>
                  ))}
                </div>
              </div>
              <div className="host-container">
                <div className="host">
                  <h4 className="logement-name">{logement.host.name}</h4>
                  <img
                    className="logement-picture-host"
                    src={logement.host.picture}
                    alt={logement.host.name}
                  />
                </div>

                <div className="rating-container">
                  {typeof logement.rating === "string"
                    ? Array.from(
                        { length: parseInt(logement.rating) },
                        (_, i) => (
                          <img
                            key={i}
                            src={filledStars}
                            alt="Etoiles pleines"
                          />
                        )
                      )
                    : null}
                  {typeof logement.rating === "string"
                    ? Array.from(
                        { length: 5 - parseInt(logement.rating) },
                        (_, i) => (
                          <img key={i} src={emptyStars} alt="Etoiles vide " />
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
            <div className="logement-collapse-container">
              <div className="collapse-about-margin logement">
                {
                  <Collapse
                    question={{
                      id: logement.id,
                      title: "Description",
                      description: logement.description,
                    }}
                  />
                }
              </div>
              <div className="collapse-about-margin logement">
                {
                  <Collapse
                    question={{
                      id: logement.id,
                      title: "Equipements",
                      description: logement.equipments.map((element, i) => (
                        <li key={i}>{element}</li>
                      )),
                    }}
                  />
                }
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Logement;
