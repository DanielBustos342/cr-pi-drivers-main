import React from "react";
import { Link } from "react-router-dom";

const defaultImage = "https://www.donolli.com.ar/defaultImagePI.png";

const Card = (props) => {
  const { id, image, forename, surname, teams, dob } = props;
  return (
    // <Link to={`/detail/${id}`}>
    <div>
      <div>
        <h3>{id}</h3>
      </div>
      <div>
        <img src={image || defaultImage} alt={`${forename} ${surname}`} />
      </div>
      <div>
        <h3>{`${forename} ${surname}`}</h3>
      </div>
      <div>
        <h4>{dob}</h4>
      </div>
      <div>
        {typeof teams === "string" ? (
          <p>{teams}</p>
        ) : Array.isArray(teams) && teams.length > 0 ? (
          <p>
            {teams.map((team, index) =>
              index === teams.length - 1 ? team.name : `${team.name}, `
            )}
          </p>
        ) : (
          <p>Teams were not found.</p>
        )}
        ;
      </div>
      <hr></hr>
    </div>
    // </Link>
  );
};

export default Card;
