import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, teams }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{teams}</p>
      </div>
    </div>
  );
};

export default Card;
