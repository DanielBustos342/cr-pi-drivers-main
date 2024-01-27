import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  //!este codigo es para hacer que la pagina de inicio ande correctamente
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const start = () => {
    setAccess(true);
  };

  useEffect(() => {
    if (access) {
      navigate("/start");
    }
  }, [access, navigate]);
  //!------------------------------------------------------------------
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Landing onClick={start} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
