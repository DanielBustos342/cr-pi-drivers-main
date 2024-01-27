import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx";
import style from "./NavBar.module.css";
import logoNav from "../../assets/img/f1-logo.png";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logoNav} />
      </div>
      <ul className={style.navLinks}>
        <li className={style.liNav}>
          <MyNavLink name="form" />
        </li>
        <li className={style.liNav}>
          <MyNavLink name="home" />
        </li>
      </ul>
      <div className={style.navSearch}>
        {location.pathname === "/home" ? <SearchBar /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
