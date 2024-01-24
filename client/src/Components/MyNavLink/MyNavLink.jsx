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
          <div class="top"></div>
          <div class="left"></div>
          <div class="bottom"></div>
          <div class="right"></div>
        </button>
      </NavLink>
    </div>
  );
};

export default MyNavLink;
