import axios from "axios";
import React, { useEffect, useState } from "react";

const MainIndex = () => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    axios.get("/logement.json").then((res) => setData(res.data));
  });

  return (
    <div className="mainColorGrey">
      <div className="grille">
        {data.map((logement) => (
          <div key={logement.id} className="grille-item">
            {<img src={logement.cover} alt={logement.title} />}
            <span key={logement.id}>{logement.title} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainIndex;
