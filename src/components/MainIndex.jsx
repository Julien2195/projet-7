import React, { useEffect, useState } from "react";

const MainIndex = () => {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    fetch("/logement.json")
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
              {<img src={logement.cover} alt={logement.title} />}
              <span key={logement.id}>{logement.title} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainIndex;
