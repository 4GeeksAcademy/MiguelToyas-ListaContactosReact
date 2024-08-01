import React, { useEffect, useContext } from "react";
import CardContacto from "../component/CardContacto";
import { Context } from "../Context-Provider/ContextProvider";

function ListaDeContactos() {
  const context = useContext(Context);

  useEffect(() => {
    const fetchAndSortContacts = () => {
      context.getContacts();
      sortContacts(context.contactos);
    };

    fetchAndSortContacts();
  }, []);

  const sortContacts = (contacts) => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    context.setContactos([...contacts]);
  };

  return (
    <div className="mx-4">
      <h1>Lista de Contactos:</h1>
      <h5 className="text-secondary">Los contactos aparecen ordenados alfabéticamente.</h5>
      <div className="row mx-4 my-4">
        {context.contactos.map((contacto, index) => (
          <div key={index} className="col-4 my-3">
            <CardContacto
              name={contacto.name}
              phone={contacto.phone}
              email={contacto.email}
              address={contacto.address}
              id={contacto.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaDeContactos;
