import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Register from "./views/Register";
import NavBarMenu from "./components/NavBarMenu";

function App() {
  return (
    <>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
