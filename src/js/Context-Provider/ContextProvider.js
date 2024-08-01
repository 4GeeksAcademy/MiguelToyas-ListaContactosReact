import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [contactos, setContactos] = useState([]);

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://playground.4geeks.com/contact/agendas/mitoperni"
      );
      setContactos(response.data.contacts);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addContact = (newContact) => {
    setContactos(prevContacts => [...prevContacts, newContact]);
  };

  useEffect(() => {  
    getContacts();
  }, []); 

  return (
    <Context.Provider
      value={{ contactos, setContactos, getContacts, addContact }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider as Provider };