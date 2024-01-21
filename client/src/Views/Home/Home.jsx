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
