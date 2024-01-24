import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.Module.css";

const Card = ({ id, image, name, teams }) => {
  return (
    <section className={style.containerCard}>
      <h3 className={style.cardName}>{name}</h3>
      <Link to={`/detail/${id}`}>
        <div className={style.containerImage}>
          <img src={image} alt={name} />
        </div>
      </Link>
      <div className={style.cardTeams}>
        <p>{teams}</p>
      </div>
    </section>
  );
};

export default Card;
