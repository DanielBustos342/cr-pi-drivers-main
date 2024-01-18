import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../../Redux/actions.js";
import axios from "axios";

const Home = () => {
  const [drivers, setDrivers] = useState([]);

  const URL_BASE = "https://pi-drivers.onrender.com/drivers";

  const dataDrivers = async () => {
    try {
      const response = await axios(`${URL_BASE}`);
      setDrivers(response.data);
    } catch (error) {
      onsole.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dataDrivers();
  }, []);

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    if (allDrivers.length === 0) {
      dispatch(getAllDrivers());
    }
  }, [dispatch, allDrivers.length]);

  return (
    <div>
      <Cards drivers={drivers} />
    </div>
  );
};

export default Home;
