import React, { useState } from "react";

const Searchbar = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Write a name" />
      </div>
      <div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
