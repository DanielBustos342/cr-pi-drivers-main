import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx";
import style from "./NavBar.module.css";
import logoNav from "../../assets/img/f1-logo.png";
import { useDispatch } from "react-redux";
import { refresh } from "../../Redux/actions.js";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(refresh());
  };
  return (
    <nav>
      <div onClick={handleRefresh} className={style.containerImageLogo}>
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
