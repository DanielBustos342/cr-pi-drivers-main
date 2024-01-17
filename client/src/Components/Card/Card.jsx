import React from "react";
import { Link } from "react-router-dom";

const defaultImage = "../../assets/img/f1 imagenError.jpg";

const Card = ({ id, forename, surname, image_url, teams, dob }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <div>
          <img src={image_url || defaultImage} alt={`${forename} ${surname}`} />
        </div>
        <div>
          <h3>{`${forename} ${surname}`}</h3>
        </div>
        <div>
          <h4>{dob}</h4>
        </div>
        <div>
          <p>{teams.join(" | ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
