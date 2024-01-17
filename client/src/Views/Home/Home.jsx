import React from "react";
// import Cards from "../../Components/Cards/Cards.jsx";
// import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const dispatch = useDispatch();
  // const allDrivers = useSelector((state) => state.allDrivers);
  // const currentDrivers = allDrivers.slice(
  //   indexOfFirstDriver,
  //   indexOfLastDriver
  // );

  // useEffect(() => {
  //   if (allDrivers.length === 0) {
  //     dispatch(getAllDrivers());
  //   }
  // }, [dispatch, allDrivers.length]);

  return (
    <div>
      {/* {typeof allDrivers[0] === "object" && "message" in allDrivers[0] ? (
        <p className={style.mensajeCentral}>{allDrivers[0].message}</p>
      ) : (
        <Cards drivers={currentDrivers} />
      )} */}
    </div>
  );
};

export default Home;
