import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MyNavLink.module.css";

const MyNavLink = ({ name }) => {
  const path = name.toLowerCase().split(" ").join("");
  return (
    <div className={style.containerNavLink}>
      <NavLink to={`${path}`}>
        <button>
          <span>{name}</span>
        </button>
      </NavLink>
    </div>
  );
};

export default MyNavLink;
