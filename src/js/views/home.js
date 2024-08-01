import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1 className="mb-4">Bienvenido a tu lista de contactos</h1>
    <p className="lead mb-4">
      Esta es tu aplicación para gestionar todos tus contactos de manera fácil y eficiente.
    </p>
    <img
      src="https://images.unsplash.com/photo-1608610026254-da1c4f08ce9d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Contact Management"
      className="img-fluid rounded mb-4"
      style={{ maxWidth: "50%", height: "auto" }}
    />
    <div className="d-flex justify-content-center">
      <div className="btn-group">
        <a href="/contactos" className="btn btn-outline-primary rounded">
          Ver Lista de Contactos
        </a>
        <a href="/nuevo-contacto" className="btn btn-outline-success ms-2 rounded">
          Crear Nuevo Contacto
        </a>
      </div>
    </div>
  </div>
);
