import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [nameToFilter, setNameToFilter] = useState("");

  const handlerSearch = () => {
    if (!nameToFilter || !isNaN(nameToFilter))
      return alert("Enter a valid name");
  };

  const handlerChange = (event) => {
    setNameToFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={nameToFilter}
          placeholder="Write a name"
          onChange={handlerChange}
        />
      </div>
      <div>
        <button onClick={handlerSearch}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
