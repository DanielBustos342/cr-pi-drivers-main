import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDriver } from "../../Redux/actions.js";
import style from "./SearchBar.module.css";

const Searchbar = () => {
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
  return (
    <div>
      <section>
        <form autoComplete="off">
          <div className={style.containerSearch}>
            <input
              onChange={handleInput}
              type="text"
              id="search"
              placeholder="Search..."
              className={style.inputSearchNav}
            ></input>
            <button onClick={handleButton} className={style.buttonSearh}>
              <span>Search</span>
              {/* <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div> */}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Searchbar;
