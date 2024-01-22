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

import React, { useEffect } from "react";
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

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const teams = useSelector((state) => state.teams);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);

  const pagination = (event) => {
    dispatch(changePage(event.target.name));
  };

  const filter = (event) => {
    if (event.target.name === "filter-teams")
      dispatch(filterTeam(event.target.value));
    if (event.taget.name === "filter-order")
      dispatch(filterOrder(event.target.value));
    if (event.target.name === "filter-origin")
      dispatch(filterOrigin(event.taget.value));
  };

  const handleRefresh = () => {
    dispatch(refresh());
    document.getElementById("select-1").value = "all-drivers";
    document.getElementById("select-2").value = "------";
    document.getElementById("select-3").value = "------";
  };

  return (
    <div>
      <div>
        <div>
          <h3>Page: {currentPage + 1}</h3>
        </div>
        <div>
          <button onClick={pagination} name="prev">
            {"<<"}
          </button>
          <button onClick={handleRefresh}> Refresh</button>

          <select id="select-1" name="filter-origin" onChange={filter}>
            <option value="all-drivers">All Drivers</option>
            <option value="created">Created</option>
            <option value="api">API</option>
          </select>

          <select id="select-2" name="filter-teams" onChange={filter}>
            <option value="------">------</option>
            {teams?.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>

          <select id="select-3" name="filter-order" onChange={filter}>
            <option value="------">------</option>
            <option value="asc">Ascendant</option>
            <option value="desc">Descending</option>
          </select>

          <button onClick={pagination} name="next">
            {">>"}
          </button>
        </div>
      </div>

      <div>
        <div>
          <Cards drivers={drivers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
