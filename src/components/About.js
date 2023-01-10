import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import banniere from "../assets/banniere-about.png";
import vector from "../assets/vector.png";

const About = () => {
  const [openCollapse, setOpencollapse] = useState(null);

  const toggle = (i) => {
    if (openCollapse === i) {
      return setOpencollapse(null);
    }
    setOpencollapse(i);
  };

  const questions = [
    {
      id: 1,
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Header />

      <div className="banniere-about-container">
        <img
          className="banniere-about"
          src={banniere}
          alt="banniere A Propos"
        />
      </div>
      <div className="collapse-about-margin">
        <div className="collapse-about-container">
          {questions.map((question) => (
            <div key={question.id} className="collapse-about">
              <div className=" collapse-infos">
                <h3>{question.title}</h3>
                <img
                  className={
                    openCollapse === question.id
                      ? "vector-rotate-open"
                      : "vector-rotate-reverse"
                  }
                  onClick={() => {
                    toggle(question.id);
                  }}
                  src={vector}
                  alt="vector"
                />
              </div>
              {openCollapse === question.id ? (
                <div className="collapse-description">
                  <p>{question.description}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
