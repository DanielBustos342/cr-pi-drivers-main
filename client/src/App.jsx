import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
import "./App.css";

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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
