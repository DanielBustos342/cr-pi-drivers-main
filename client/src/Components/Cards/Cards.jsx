import React from "react";
import Card from "../Card/Card.jsx";

const Cards = ({ drivers }) => {
  return (
    <div>
      {drivers.map((driver) => (
        <Card
          key={driver.id} // clave unica
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          teams={driver.Teams || driver.teams}
          image={driver.image.url ? driver.image.url : driver.image}
          dob={driver.dob}
        />
      ))}
    </div>
  );
};

export default Cards;
