import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.Module.css";

const Card = ({ id, image, name, teams }) => {
  return (
    <Link to={`/detail/${id}`}>
      <section className={style.containerCard}>
        <div className={style.card}>
          <h3>{name}</h3>
          <div className={style.containerImage}>
            <img src={image} alt={name} className={style.imgCard} />
          </div>
          <div>
            <p>{teams}</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;
