import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLink = ({ name }) => {
  const path = name.toLowerCase().split(" ").join("");
  return (
    <div>
      <NavLink to={`${path}`}>
        <button>{name}</button>
      </NavLink>
    </div>
  );
};

export default MyNavLink;
