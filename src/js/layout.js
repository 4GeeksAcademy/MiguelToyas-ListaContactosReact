// src/Layout.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import ListaDeContactos from "./views/ListaDeContactos";
import CrearNuevoContacto from "./views/CrearNuevoContacto";
import DetalleContacto from "./views/DetalleContacto";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div>
      <ScrollToTop>
        <Navbar isVisible={showNavbar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactos" element={<ListaDeContactos />} />
          <Route path="/nuevo-contacto" element={<CrearNuevoContacto />} />
          <Route path="/contactos/:id" element={<DetalleContacto />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
};

export default Layout;
