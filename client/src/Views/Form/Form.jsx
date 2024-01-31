// 📍 FORM PAGE |: en esta vista se encontrará el formulario para crear un nuevo driver.

// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// Nombre.
// Apellido.
// Nacionalidad.
// Imagen.
// Fecha de Nacimiento.
// Descripción.
// Escuderías.
// Posibilidad de seleccionar/agregar varias escuderías en simultáneo.
// Botón para dar de alta (crear) el nuevo driver.

// [IMPORTANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del driver no pueda contener símbolos,etc.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDriver, getTeams } from "../../Redux/actions.js";
import Card from "../../Components/Card/Card.jsx";
import validation from "./validation.js";
import style from "./Form.module.css";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    nacionality: "",
    birthdate: "",
    Teams: [],
    image:
      "https://i.pinimg.com/originals/e1/2c/9b/e12c9be3e3174b44dec94bf443d23f70.jpg",
    description: "",
  });

  const [cont, setCont] = useState(1);
  const [team, setTeam] = useState([]);
  const [inputTeam, setInputTeam] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    if (event.target.name === "teams") {
      //name: obtengo el nombre del input actual
      if (event.target.value !== "------") {
        //value: obtengo el valor del input actual
        setTeam([...team, event.target.value]);
        setForm((prev) => {
          return {
            ...prev,
            Teams: [...prev.Teams, event.target.value],
          };
        });
      }
    }
    if (event.target.name !== "teams") {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
    setErrors(
      validation({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const addTeam = (event) => {
    event.preventDefault(); //Esto evita que el formulario se envíe cuando se activa el evento
    setInputTeam([
      ...inputTeam,
      <div className="form-label" key={cont}>
        <select onChange={handleInput} name="teams" id="teams">
          <option value="------">------</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>,
    ]);
    setCont(cont + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("teams").value = "------";
    const driversRepeat = drivers.find(
      //verifica que no hay drivers repetidos
      (driver) =>
        driver.name.toLowerCase() === form.name.toLowerCase() &&
        driver.lastname.toLowerCase() === form.lastname.toLowerCase()
    );
    for (const key in form) {
      // verifica que no hay campos vacios
      if (form[key] === "") return alert("Some data are missing");
    }
    if (driversRepeat) return alert("The driver is already registered"); //si esta repetido muestra el alert
    dispatch(createDriver(form));
    alert("driver is created");
    //reset todos los campos y redirije a home
    setInputTeam([]);
    setForm({
      name: "",
      lastname: "",
      nacionality: "",
      birthdate: "",
      Teams: [],
      image: "",
      description: "",
    });
    navigate("/home");
  };

  return (
    <div className={style.containerForm}>
      <div>
        <h2 className={style.titleForm}>CREATING DRIVE</h2>
      </div>
      <form onSubmit={handleSubmit} className={style.formulario}>
        <div className={style.rightForm}>
          <fieldset className={style.containerForm1}>
            <legend>
              <h3 className={style.titleInfo}>DRIVER INFORMATION</h3>
            </legend>
            <div className={style.containerCampo}>
              <label className={style.labelForm}>
                NAME:
                <input
                  onChange={handleInput}
                  value={form.name}
                  type="text"
                  name="name"
                  placeholder="Write..."
                  className={style.formData}
                />
              </label>
              <div className={style.errorInput}>{errors.name}</div>
            </div>
            <div className={style.containerCampo}>
              <label className={style.labelForm}>
                LASTNAME:
                <input
                  onChange={handleInput}
                  value={form.lastname}
                  type="text"
                  name="lastname"
                  placeholder="write..."
                  className={style.formData}
                />
              </label>
              <div className={style.errorInput}>{errors.lastname}</div>
            </div>
            <div className={style.containerCampo}>
              <label className={style.labelForm}>
                NACIONALITY:
                <input
                  onChange={handleInput}
                  value={form.nacionality}
                  type="text"
                  name="nacionality"
                  placeholder="write..."
                  className={style.formData}
                />
              </label>
              <div className={style.errorInput}>{errors.nacionality}</div>
            </div>
            <div className={style.containerCampo}>
              <label className={style.labelForm}>
                BIRTHDATE:
                <input
                  onChange={handleInput}
                  value={form.birthdate}
                  type="date"
                  name="birthdate"
                  placeholder="write..."
                  className={style.formData}
                />
              </label>
              <div className={style.errorInput}>{errors.birthdate}</div>
            </div>
            <div className={style.containerDescription}>
              DESCRIPTION:
              <textarea
                onChange={handleInput}
                value={form.description}
                typeof="text"
                name="description"
                placeholder="Must be at least 5 characters"
                cols="50"
                rows="8"
              ></textarea>
              <div className={style.errorInput}>{errors.description}</div>
            </div>
          </fieldset>
        </div>
        <div className={style.midForm}>
          <fieldset>
            <legend>
              <h3 className={style.titleInfo}>ADD TEAMS</h3>
            </legend>
            <div className={style.containerAddTeam}>
              <button onClick={addTeam} className={style.btnAddTeam}>
                +
              </button>
            </div>

            <div className={style.containerTeams}>
              <select
                onChange={handleInput}
                name="teams"
                id="teams"
                className={style.selectTeams}
              >
                <option value="------"> ------ </option>
                {teams?.map((team, index) => (
                  <option key={index} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.selectTeams}>
              {inputTeam.length ? inputTeam.map((e) => e) : null}
            </div>
          </fieldset>
          <div className={style.containerCampoMid}>
            <label>
              IMAGE:
              <input
                onChange={handleInput}
                value={form.image}
                name="image"
                type="text"
                placeholder="add URL"
                className={style.formData}
              />
            </label>
            <div className={style.errorInputImage}>{errors.image}</div>
          </div>
          <div className={style.containerBtnSubmit}>
            <button type="submit" className={style.btnSubmit}>
              REGISTER
            </button>
          </div>
        </div>
        <div className={style.leftForm}>
          <Card name={form.name} image={form.image} Teams={form.Teams} />
        </div>
      </form>
    </div>
  );
};

export default Form;
