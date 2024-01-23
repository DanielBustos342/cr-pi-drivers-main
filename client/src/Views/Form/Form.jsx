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
      "https://img.freepik.com/vector-gratis/coche-carreras-formula-1_23-2147871687.jpg?w=740&t=st=1706001078~exp=1706001678~hmac=a7346d9bb8091d314b74a0d2363055b04876e81e09de9c227130bc4e220e3716",
    description: "",
  });

  const [cont, setCont] = useState(1);
  const [team, setTeam] = useState([]);
  const [inputTeam, setInputTeam] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    if (event.target.name === "teams") {
      if (event.target.value !== "------") {
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
    event.preventDefault();
    setInputTeam([
      ...inputTeam,
      <div className="form-label" key={cont}>
        <label htmlFor="teams">Teams:</label>
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
      (driver) =>
        driver.name.toLowerCase() === form.name.toLowerCase() &&
        driver.lastname.toLowerCase() === form.lastname.toLowerCase()
    );
    for (const key in form) {
      if (form[key] === "") return alert("Faltan completar algunos datos");
    }
    // if(Object.keys(errors).length) return alert("Faltan completar algunos datos")
    if (driversRepeat) return alert("The driver is already registered");
    dispatch(createDriver(form));
    alert("driver is created");
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>CREATING DRIVE</h2>

        <fieldset>
          <legend>
            <h3>DRIVER INFORMATION</h3>
          </legend>

          <label>
            NAME:
            <input
              onChange={handleInput}
              value={form.name}
              type="text"
              name="name"
              placeholder="Write..."
            />
            <div>{errors.name}</div>
          </label>

          <label>
            LASTNAME:
            <input
              onChange={handleInput}
              value={form.lastname}
              type="text"
              name="lastname"
              placeholder="write..."
            />
            <div>{errors.lastname}</div>
          </label>

          <label>
            NACIONALITY:
            <input
              onChange={handleInput}
              value={form.nacionality}
              type="text"
              name="nacionality"
              placeholder="write..."
            />
            <div>{errors.nacionality}</div>
          </label>

          <label>
            BIRTHDATE:
            <input
              onChange={handleInput}
              value={form.birthdate}
              type="date"
              name="birthdate"
              placeholder="write..."
            />
            <div>{errors.birthdate}</div>
          </label>
        </fieldset>

        <fieldset>
          <legend>
            <h3>ADDTIONAL INFORMATION</h3>
          </legend>

          <div>
            <label>TEAMS: </label>
            <select onChange={handleInput} name="teams" id="teams">
              <option value="------"> ------ </option>
              {teams?.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          {inputTeam.length ? inputTeam.map((e) => e) : null}
          <button onClick={addTeam}> + </button>
        </fieldset>

        <label>
          IMAGE:
          <input
            onChange={handleInput}
            value={form.image}
            name="image"
            type="text"
            placeholder="ingresa imagen poner una de ejemplo"
          />
          <div>{errors.image}</div>
        </label>

        <div>
          DESCRIPTION:
          <textarea
            onChange={handleInput}
            value={form.description}
            typeof="text"
            name="description"
            placeholder="write..."
            cols="30"
            rows="10"
          ></textarea>
          <div>{errors.description}</div>
        </div>

        <button type="submit">REGISTER</button>
      </form>
      <Card name={form.name} image={form.image} Teams={form.Teams} />
    </div>
  );
};

export default Form;
