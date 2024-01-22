import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img />
      </div>
      <div>
        <MyNavLink name="form" /> <hr />
        <MyNavLink name="home" /> <hr />
      </div>
      <div>
        <SearchBar /> <hr />
      </div>
    </nav>
  );
};

export default NavBar;
