import React, { useEffect, useContext, useState, useMemo } from "react";
import CardContacto from "../component/CardContacto";
import { Context } from "../Context-Provider/ContextProvider";
import { useNavigate } from "react-router";

function ListaDeContactos() {
  const { contactos, getContacts } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      await getContacts();
      setIsLoading(false);
    };
    fetchContacts();
  }, [getContacts]);

  useEffect(() => {
    if (!context.userName) {
      alert("Tienes que iniciar sesión para acceder a la agenda")
      navigate("/");
    }
  }, []);

  const sortedContacts = useMemo(() => {
    return [...contactos].sort((a, b) => a.name.localeCompare(b.name));
  }, [contactos]);

  if (isLoading) {
    return <div className="fs-1 m-5">Loading...</div>;
  }

  return (
    <div className="mx-4">
      <h1>Lista de Contactos:</h1>
      <h5 className="text-secondary">
        Los contactos aparecen ordenados alfabéticamente.
      </h5>
      <div className="row mx-4 my-4">
        {sortedContacts.map((contacto, index) => (
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
