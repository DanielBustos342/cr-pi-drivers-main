import React from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathName } = useLocation();

  if (pathName !== "/home") {
    return (
      <div>
        <MyNavLink name="home" />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Hola estoy mostrando el ELSE de NAV</h2>
      </div>
    );
  }
};

export default Nav;
