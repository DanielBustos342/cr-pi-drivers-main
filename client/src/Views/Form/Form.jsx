// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPowers, postHero } from "../../Redux/Actions/actions.js";

const Form = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPowers());
  // }, []);

  // const heroHabilities = useSelector((state) => state.allPowers);

  // const [state, setState] = useState({});
  // //? almacena la informacion ingresada en los input
  // const [errors, setErrors] = useState({});

  // const validate = (state, name) => {
  //   if (name === "nombre") {
  //     const regex = /^([a-z0-9])+(\/{1}[a-z0-9]+)*)+(?!([\/]{2}))$/;
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE NOMBRE
  //   }
  //   if (name === "imagen_url") {
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE imagen_url
  //   }
  //   if (name === "identidad_secreta") {
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE identidad_secreta
  //   }
  //   if (name === "poderes") {
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE poderes
  //   }
  //   if (name === "alianzas") {
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE alianzas
  //   }
  //   if ((name = "aliados")) {
  //     //? ACA VAN A IR LAS VALIDACIONES PARA EL INPUT DE alidos
  //   }
  // };

  // const handleChange = (event) => {
  //   //? logica de almacenamiento en el estado
  // };

  // const disable = () => {
  //   //? logica de disable
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(postHero(state));
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input onChange={handleChange} name="nombre" type="text" />
          <label>{errors.nombre}</label>
          <label>Imagen: </label>
          <input onChange={handleChange} name="imagen_url" type="text" />
          <label>{errors.imagen_url}</label>
          <label>Poder de Fuerza: </label>
          <input onChange={handleChange} name="poder_de_fuerza" type="text" />
          <label>{errors.imagen_url}</label>
          <label>Identidad Secreta: </label>
          <input onChange={handleChange} name="identidad_secreta" type="text" />
          <label>{errors.nombre}</label>
        </div>
      </form> */}
      Form
    </div>
  );
};

export default Form;
