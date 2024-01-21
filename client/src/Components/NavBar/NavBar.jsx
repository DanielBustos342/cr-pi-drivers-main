import React from "react";
import MyNavLink from "../MyNavLink/MyNavLink.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx";
import axios from "axios";

const NavBar = () => {
  //!codigo para buscar carta de la base de datos
  const onSearch = async (name) => {
    try {
      const URL_BASE = `http://localhost:5000/drivers?name.forename`;
      const response = await axios.get(`${URL_BASE}=${name}`);
      response.data;
    } catch (error) {
      console.error("Error searching driver:", error);
    }
  };

  return (
    <div>
      <MyNavLink name="form" /> <hr />
      <MyNavLink name="home" /> <hr />
      <SearchBar onSearch={onSearch} /> <hr />
    </div>
  );
};

export default NavBar;
