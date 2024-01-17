import React from "react";
import Searchbar from "../Searchbar/Searchbar.jsx";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";

const NavBar = () => {
  return (
    <div>
      <Searchbar />
      <MyNavLink name="form" />
      <MyNavLink name="home" />
    </div>
  );
};

export default NavBar;
