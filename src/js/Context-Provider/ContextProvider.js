import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();


const ContextProvider = ({ children }) => {
    const [contactos, setContactos] = useState([]);

    const getContacts = async () => {
      try {
        const response = await axios.get(
          "https://playground.4geeks.com/contact/agendas/mitoperni"
        );
        setContactos(response.data.contacts);
        console.log(contactos);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {  
      getContacts();
    }, []); 

  return (
    <Context.Provider
      value={{ contactos, setContactos, getContacts }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider as Provider };