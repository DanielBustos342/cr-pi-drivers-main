// DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un corredor:

// ID.
// Nombre.
// Apellido.
// Nacionalidad.
// Imagen.
// Descripción.
// Fecha de Nacimiento.
// Escuderías.

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDriverDetail, getDriverById } from "../../Redux/actions";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);

  useEffect(() => {
    dispatch(getDriverById(id));
    return () => dispatch(cleanDriverDetail());
  }, [id]);

  return (
    <div>
      <div>
        <h2>ID: {driverDetail?.id}</h2>
        <h2>NAME: {driverDetail?.name}</h2>
        <h3>LASTNAME: {driverDetail?.lastname}</h3>
        <h3>NATIONALITY: {driverDetail?.nationality}</h3>
        <h3>BIRTHDATE: {driverDetail?.brithdate}</h3>
        <h3>DESCRIPTION: {driverDetail?.description}</h3>
        <h3>TEAMS: {driverDetail?.Teams?.join(", ")}</h3>
      </div>
      <div>
        <img src={driverDetail?.image} alt={driverDetail?.name} />
      </div>
    </div>
  );
};

export default Details;
