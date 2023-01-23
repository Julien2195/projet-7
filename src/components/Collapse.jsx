import React from "react";
import { useState } from "react";
import vector from "../assets/vector.png";

// const Collapse = ({ question }) => {
//   const [active, setActive] = useState([]);
//   const handleToggle = (i) => {
//     let copy = [...active];
//     if (copy.includes(i)) {
//       copy = copy.filter((x) => x != i);
//     } else {
//       copy.push(i);
//     }
//     setActive(copy);
//   };

const Collapse = ({ question }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="collapse-about">
        <div className=" collapse-infos" onClick={() => setIsActive(!isActive)}>
          <h3>{question.title}</h3>
          {isActive ? (
            <img src={vector} alt="" className="active2" />
          ) : (
            <img src={vector} alt="" className="active3" />
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
