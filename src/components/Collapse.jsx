import React from "react";
import { useState } from "react";
import vector from "../assets/vector.png";

const Collapse = ({ question }) => {
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

  return (
    <div>
      {question && (
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
              <img className={"collapse-container"} src={vector} alt="vector" />
            </div>
          </div>

          {active.includes(question.id) ? (
            <div className="collapse-description">
              <p>{question.description}</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Collapse;
