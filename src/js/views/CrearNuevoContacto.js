import React, { useState } from "react";
import FormNuevoContacto from "../component/FormNuevoContacto";

function CrearNuevoContacto() {
  

  return (
    <div className="mx-4">
      <h1>Crear Nuevo Contacto:</h1>
      <div className="mx-5 my-3">
        <FormNuevoContacto />
      </div>
    </div>
  );
}

export default CrearNuevoContacto;
