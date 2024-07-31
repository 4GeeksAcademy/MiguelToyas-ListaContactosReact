import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ms-2">Home</span>
      </Link>
      <div className="ml-auto">
        <Link to="/contactos">
          <button className="btn btn-primary">
            Lista de contactos
          </button>
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/nuevo-contacto">
          <button className="btn btn-success">
            Crear Nuevo Contacto
          </button>
        </Link>
      </div>
      
    </nav>
  );
};
