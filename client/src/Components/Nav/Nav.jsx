import React from "react";
import { Link } from "react-router-dom";
import { refresh } from "../../Redux/actions";

const Nav = () => {
  const Refresh = () => {
    dispatch(refresh());
  };
  return (
    <nav>
      <ul>
        //imagen del logo
        <li>
          <img />
        </li>
        <li>
          <Link onClick={Refresh} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form">Register Driver</Link>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
