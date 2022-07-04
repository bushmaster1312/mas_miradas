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
import { useEffect } from "react";






function App() {
  const { usuario, setUsuario } = useContext(Context)
  useEffect(() => {
     const loggedUserJSON= window.localStorage.getItem('correo')
     if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)     
      setUsuario(user)
      console.log(user)
     }
  }, [])
  

  return (


    <Router>
      <Routes>
        <Route path="/" element={usuario !== null ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={usuario === null ? <Login /> : <Navigate to="/" />} />
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
