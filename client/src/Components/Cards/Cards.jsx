import React from "react";
import Card from "../Card/Card.jsx";

const Cards = ({ drivers }) => {
  return (
    <div>
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
