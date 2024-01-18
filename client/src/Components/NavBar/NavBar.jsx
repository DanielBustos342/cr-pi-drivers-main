import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";

const NavBar = () => {
  return (
    <div>
      <MyNavLink name="form" />
      <MyNavLink name="home" />
    </div>
  );
};

export default NavBar;
