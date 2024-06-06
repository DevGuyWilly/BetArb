import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage/HomePage";
import Login from "./Views/auth/Login/Login";
import Signup from "./Views/auth/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
