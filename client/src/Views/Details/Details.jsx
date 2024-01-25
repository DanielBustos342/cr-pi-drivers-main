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
import style from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);

  useEffect(() => {
    dispatch(getDriverById(id));
    return () => dispatch(cleanDriverDetail());
  }, [id]);

  return (
    <div className={style.containerDetails}>
      <div className={style.detailCard}>
        <div className={style.containerImgDetail}>
          <img
            src={driverDetail?.image}
            alt={driverDetail?.name}
            className={style.detailImg}
          />
        </div>
        <h2 className={style.detailId}>ID: {driverDetail?.id}</h2>
        <h2 className={style.detailId}>NAME: {driverDetail?.name}</h2>
        <h3 className={style.detailsDatos}>
          LASTNAME: {driverDetail?.lastname}
        </h3>
        <h3 className={style.detailsDatos}>
          NACIONALITY: {driverDetail?.nacionality}
        </h3>
        <h3 className={style.detailsDatos}>
          BIRTHDATE: {driverDetail?.birthdate}
        </h3>
        <h3 className={style.detailsDatos}>
          TEAMS: {driverDetail?.Teams?.join(", ")}
        </h3>
        <h3 className={style.details}>
          DESCRIPTION: {driverDetail?.description}
        </h3>
      </div>
    </div>
  );
};

export default Details;
