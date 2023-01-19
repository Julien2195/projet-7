import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainIndex = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="mainColorGrey">
        <div className="grille">
          {logements.map((logement) => (
            <div key={logement.id} className="grille-item">
              <Link to={`/logements/${logement.id}`}>
                <img src={logement.cover} alt={logement.title} />
              </Link>

              <span key={logement.id}>{logement.title} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainIndex;
