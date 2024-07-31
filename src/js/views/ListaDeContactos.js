import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CardContacto from "../component/CardContacto";
import { Context } from "../Context-Provider/ContextProvider"


function ListaDeContactos() {
  const context = useContext(Context);
   

  return (
    <div className="mx-4">
      <h1>Lista de Contactos:</h1>
      <div className="row mx-4 my-4">
        {context.contactos.map((contacto, index) => (
          <div key={index} className="col-4 my-3">
            <CardContacto
            name = {contacto.name}
            phone = {contacto.phone}
            email = {contacto.email}
            address = {contacto.address}
            id = {contacto.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaDeContactos;
