import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={style.navLinks}>
        <li>
          <img />
        </li>
        <li>
          <MyNavLink name="form" />
        </li>
        <li>
          <MyNavLink name="home" />
        </li>
        <li>
          <MyNavLink name="about" />
        </li>
      </ul>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
