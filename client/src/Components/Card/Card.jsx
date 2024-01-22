import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, forename, surname, teams }) => {
  return (
    <div>
      <div>
        <h3>{`${forename} ${surname}`}</h3>
      </div>
      <div>
        <img src={image} alt={`${forename} ${surname}`} />
      </div>
      <div>
        <p>{teams}</p>
      </div>
    </div>
  );
};

export default Card;
