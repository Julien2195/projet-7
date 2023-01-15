import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import banniere from "../assets/banniere-about.jpg";
import vector from "../assets/vector.png";

const About = () => {
  const [active, setActive] = useState([]);
  const handleToggle = (i) => {
    let copy = [...active];
    if (copy.includes(i)) {
      copy = copy.filter((x) => x != i);
    } else {
      copy.push(i);
    }

    setActive(copy);
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
        {questions.map((question) => (
          <div
            key={question.id}
            className={`collapse-about-container ${
              active.includes(question.id) ? "active" : "closed"
            }`}
          >
            <div className="collapse-about">
              <div
                className=" collapse-infos"
                onClick={() => handleToggle(question.id)}
              >
                <h3>{question.title}</h3>
                <img
                  className={"collapse-container"}
                  src={vector}
                  alt="vector"
                />
              </div>
              {active.includes(question.id) ? (
                <div className="collapse-description">
                  <p>{question.description}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
