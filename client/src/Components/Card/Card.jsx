import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, teams }) => {
  return (
    <Link to={`/detail/${id}`}>
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
    </Link>
  );
};

export default Card;
