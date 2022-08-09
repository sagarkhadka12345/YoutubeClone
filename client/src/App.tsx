import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
