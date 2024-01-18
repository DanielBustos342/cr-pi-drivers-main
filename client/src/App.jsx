import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import NavBar from "./Components/NavBar/NavBar";
// import { getAllDrivers } from "./Redux/actions.js";

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
  // const [searchId, setSearchId] = useState("");
  // const dispatch = useDispatch();

  const onSearch = (id) => {
    setSearchId(id);
  };

  // useEffect(() => {
  //   if (searchId) {
  //     dispatchEvent(getDriverById(searchId));
  //   }
  // }, [searchId, dispatch]);

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Landing onClick={start} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
