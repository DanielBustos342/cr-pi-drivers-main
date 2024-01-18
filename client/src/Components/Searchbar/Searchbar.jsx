import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [id, setId] = useState("");

  const handlerChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={id}
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
