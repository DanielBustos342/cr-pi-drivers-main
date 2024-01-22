import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDriver, refresh } from "../../Redux/actions.js";

const Nav = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();
    dispatch(searchDriver(input));
    document.getElementById("search").value = "";
  };

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
          <section>
            <form autoComplete="off">
              <div>
                <input
                  onChange={handleInput}
                  type="text"
                  id="search"
                  placeholder="Search..."
                ></input>
                <button onClick={handleButton}>Search</button>
              </div>
            </form>
          </section>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
