import React from "react";
import { useState } from "react";
import vector from "../assets/vector.png";

const Collapse = ({ question }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="collapse-about">
        <div className=" collapse-infos" onClick={() => setIsActive(!isActive)}>
          <h3>{question.title}</h3>
          {isActive ? (
            <img src={vector} alt="vector" className="active" />
          ) : (
            <img src={vector} alt="vector" className="closed" />
          )}
        </div>
        {isActive ? (
          <div className="collapse-description">{question.description}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Collapse;
