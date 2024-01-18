import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import NavBar from "./Components/NavBar/NavBar";

function App() {
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
  return (
    <div>
      <NavBar />
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
