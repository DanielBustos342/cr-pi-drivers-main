// LANDING PAGE | deberás crear una página de inicio o bienvenida con:

// Alguna imagen de fondo representativa al proyecto.
// Botón para ingresar a la home page.

import React from "react";
import landingVideo from "../../assets/img/Sky Sports F1 2021 Alternative Intro.mp4";
import Style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={Style.containerLanding}>
      <video
        className={Style.backgroundVideo}
        src={landingVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className={Style.containerBtn}>
        <Link to={"/home"}>
          <button className={Style.landingBtn}>
            <span>Start</span>
            <span className={Style.top}></span>
            <span className={Style.left}></span>
            <span className={Style.botton}></span>
            <span className={Style.right}></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
