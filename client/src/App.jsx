import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/home" Component={Home} />
            <Route path="/form" Component={Form} />
            <Route path="/details:id" Component={Details} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
