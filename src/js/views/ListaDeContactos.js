import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContacto from "../component/CardContacto";

function ListaDeContactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await axios.get(
          "https://playground.4geeks.com/contact/agendas/mitoperni"
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.contacts);
        setContactos(response.data.contacts);
        console.log(contactos);
      } catch (error) {
        console.error(error);
      }
    }

    getContacts();
  }, []);

  return (
    <div className="mx-4">
      <h1>Lista de Contactos:</h1>
      <div className="row mx-4 my-4">
        {contactos.map((contacto, index) => (
          <div key={index} className="col-4 my-3">
            <CardContacto
            name = {contacto.name}
            phone = {contacto.phone}
            email = {contacto.email}
            address = {contacto.address}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaDeContactos;
