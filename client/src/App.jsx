import { Routes, Route, useNavigate } from "react-router-dom"; //Hook
import { useEffect, useState } from "react"; //hook
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  //!este codigo es para hacer que la pagina de inicio ande correctamente
  const navigate = useNavigate(); //funcion para navegar a diferentes rutas en una aplicacion
  const [access, setAccess] = useState(false); // funcion de estado inicial y estado a actualizar

  const start = () => {
    setAccess(true);
  };

  useEffect(() => {
    //esta funcion se ejecuta cada vez que access o navigate cambien
    if (access) {
      navigate("/home");
    }
  }, [access, navigate]);
  //!------------------------------------------------------------------

  return (
    <div>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Landing onClick={start} />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
