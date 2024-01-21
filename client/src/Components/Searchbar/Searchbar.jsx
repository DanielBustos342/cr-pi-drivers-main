import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [driverName, setDriverName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setDriverName(value);
  };

  const handleClick = async () => {
    try {
      const driverData = await onSearch(driverName);
      onSearch(driverData);
    } catch (error) {
      console.error("Error searching driver:", error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          // value={id}
          placeholder="Write a name"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
