import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Peluqueria from "./Pages/Peluqueria/Peluqueria";
import Login from "./Pages/login/Login";
import Register from "./Pages/Home/register";
import { useContext, useState } from "react";
import { Context } from "./store/AppContext";
import Admin from "./Pages/admin/Admin";
import React from "react";
import Create from "./Pages/create/Create";
import Contacto from "./Pages/contacto/Contacto";






function App() {
  const { usuario } = useContext(Context)

  return (


    <Router>
      <Routes>
        <Route path="/" element={usuario.correo !== '' ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={usuario.correo === '' ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:servicio" element={<Peluqueria />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>


  );
}

export default App;
