import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, Navigate } from "react-router-dom";
import filledStars from "../assets/rating.svg";
import emptyStars from "../assets/rating-empty.svg";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";

const Logement = () => {
  let params = useParams();
  const [logement, setLogement] = useState(null);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        setLogement(data);
        const found = data.find((logement) => logement.id === params.id);
        if (found) {
          setLogement(found);
        } else {
          setRedirect(true);
        }
      });
  }, []);
  if (redirect) {
    return <Navigate to="*" />;
  }

  return (
    <div>
      <Header />

      <div className="logement-container">
        {logement && (
          <div className="slidesShow-image-container">
            <Gallery logement={logement} />
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
      <Footer marginTop={224} />
    </div>
  );
};
export default Logement;
