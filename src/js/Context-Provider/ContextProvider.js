import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();


const ContextProvider = ({ children }) => {
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
    <Context.Provider
      value={{ contactos, setContactos }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider as Provider };