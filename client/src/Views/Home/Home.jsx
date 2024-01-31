// HOME PAGE | la página principal de tu SPA debe contener:

// SearchBar: un input de búsqueda para encontrar drivers por nombre.
// Sector en el que se vea un listado de cards con los drivers. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /drivers y deberá mostrar su:
// Imagen.
// Nombre.
// Escuderías.
// Cuando se le hace click a una Card deberá redirigir al detalle de ese driver específico.
// Botones/Opciones para filtrar por team, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los drivers por orden alfabético y por fecha año de nacimiento.
// Paginado: el listado de drivers se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 9 drivers por página.
// ⚠️ IMPORTANTE: se deben mostrar tanto los drivers traidos desde la API como así también los de la base de datos, pero NO está permitido almacenar en la base de datos los drivers de la API. Solamente se pueden guardar aquellos creados desde el form.

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDrivers,
  getTeams,
  changePage,
  filterTeam,
  refresh,
  filterOrder,
  filterOrigin,
} from "../../Redux/actions.js";
import Cards from "../../Components/Cards/Cards.jsx";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const teams = useSelector((state) => state.teams);
  const currentPage = useSelector((state) => state.currentPage);
  const [filterActived, setFilterActived] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("------");
  const [selectedFilterDriver, setSelectedFilterDriver] =
    useState("all-drivers");

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);

  const pagination = (event) => {
    dispatch(changePage(event.target.name));
  };

  const filter = (event) => {
    setFilterActived(true);
    setSelectedFilter(event.target.value);
    setSelectedFilterDriver(event.target.value);
    const filterMap = {
      "filter-teams": filterTeam,
      "filter-order": filterOrder,
      "filter-origin": filterOrigin,
    };
    const { name, value } = event.target;
    const dispatchFilter = filterMap[name];

    if (dispatchFilter) {
      dispatch(dispatchFilter(value));
    }
    // if (event.target.name === "filter-teams")
    //   dispatch(filterTeam(event.target.value));
    // if (event.target.name === "filter-order")
    //   dispatch(filterOrder(event.target.value));
    // if (event.target.name === "filter-origin")
    //   dispatch(filterOrigin(event.target.value));
  };

  const handleRefresh = () => {
    dispatch(refresh());
    setFilterActived(false);
    setSelectedFilter("------");
    setSelectedFilterDriver("all-driver");
  };

  return (
    <div className={style.containerHome}>
      <aside>
        <div className={style.containerFiltred}>
          <ul>
            <li>
              <input
                type="radio"
                id="all-drivers"
                name="filter-origin"
                value="all-drivers"
                checked={selectedFilterDriver === "all-drivers"}
                onChange={filter}
                className={style.inputAside}
              />
              <label htmlFor="all-drivers">All Drivers</label>
            </li>
            <li>
              <input
                type="radio"
                id="created"
                name="filter-origin"
                value="created"
                checked={selectedFilterDriver === "created"}
                onChange={filter}
                className={style.inputAside}
              />
              <label htmlFor="created">Created</label>
            </li>
            <li>
              <input
                type="radio"
                id="api"
                name="filter-origin"
                value="api"
                checked={selectedFilterDriver === "api"}
                onChange={filter}
                className={style.inputAside}
              />
              <label htmlFor="api">API</label>
            </li>
          </ul>
        </div>

        <div className={style.titleTeam}>Order by Team</div>
        <div className={style.containerTeams}>
          <select
            name="filter-teams"
            onChange={filter}
            value={selectedFilter}
            className={style.selectTeams}
          >
            <option value="------" className={style.option}>
              All
            </option>
            {teams?.map((team, index) => (
              <option key={index} value={team} className={style.option}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className={style.titleTeam}>Order by birthdate</div>
        <div className={style.containerOrder}>
          <select
            name="filter-order"
            onChange={filter}
            value={selectedFilter}
            className={style.selectTeams}
          >
            <option value="------" className={style.option}>
              ------
            </option>
            <option value="asc" className={style.option}>
              Ascendant
            </option>
            <option value="desc" className={style.option}>
              Descending
            </option>
          </select>
        </div>
        <div className={style.containerRefresh}>
          <button onClick={handleRefresh} className={style.buttonPage}>
            Refresh
          </button>
        </div>
      </aside>
      <div className={style.containerBodyHome}>
        {!filterActived && (
          <div className={style.containerPageNextPrev}>
            <ul className={style.navNextPrev}>
              <li>
                <button
                  onClick={pagination}
                  name="prev"
                  className={style.buttonPage}
                >
                  {"<< Prev"}
                </button>
              </li>
              <li>
                <div className={style.containerPage}>
                  <h3>Page: {currentPage + 1}</h3>
                </div>
              </li>
              <li>
                <button
                  onClick={pagination}
                  name="next"
                  className={style.buttonPage}
                >
                  {"Next >>"}
                </button>
              </li>
            </ul>
          </div>
        )}

        <Cards drivers={drivers} />
        {!filterActived && (
          <div className={style.containerPageNextPrev}>
            <ul className={style.navNextPrev}>
              <li>
                <button
                  onClick={pagination}
                  name="prev"
                  className={style.buttonPage}
                >
                  {"<< Prev"}
                </button>
              </li>
              <li>
                <div className={style.containerPage}>
                  <h3>Page: {currentPage + 1}</h3>
                </div>
              </li>
              <li>
                <button
                  onClick={pagination}
                  name="next"
                  className={style.buttonPage}
                >
                  {"Next >>"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
