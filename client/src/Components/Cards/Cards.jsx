import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

const Cards = ({ drivers }) => {
  return (
    <div className={style.containerCards}>
      {drivers?.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          name={driver.name}
          image={driver.image}
          teams={driver.Teams?.join(", ")}
        />
      ))}
    </div>
  );
};

export default Cards;
