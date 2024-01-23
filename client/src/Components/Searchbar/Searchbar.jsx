import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDriver } from "../../Redux/actions.js";

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
    </div>
  );
};

export default Searchbar;
