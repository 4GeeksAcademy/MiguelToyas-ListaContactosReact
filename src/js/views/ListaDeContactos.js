import React, { useEffect, useContext } from "react";
import CardContacto from "../component/CardContacto";
import { Context } from "../Context-Provider/ContextProvider";

function ListaDeContactos() {
  const { contactos, setContactos, getContacts } = useContext(Context);

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    if (contactos.length > 0) {
      const sortedContacts = [...contactos].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContactos(sortedContacts);
    }
  }, [contactos, setContactos]);

  return (
    <div className="mx-4">
      <h1>Lista de Contactos:</h1>
      <h5 className="text-secondary">Los contactos aparecen ordenados alfabéticamente.</h5>
      <div className="row mx-4 my-4">
        {contactos.map((contacto, index) => (
          <div key={contacto.id || index} className="col-4 my-3">
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