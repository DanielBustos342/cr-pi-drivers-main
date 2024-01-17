import React from "react";
import Card from "../Card/Card.jsx";

export default function Cards({ drivers }) {
  return (
    <div>
      {drivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          image_url={driver.image_url}
          teams={driver.teams}
        />
      ))}
    </div>
  );
}
