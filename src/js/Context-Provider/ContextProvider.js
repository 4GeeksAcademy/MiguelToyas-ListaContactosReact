import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [contactos, setContactos] = useState([]);
  const [userName, setUserName] = useState("")

  const getContacts = useCallback(async () => {
    if(userName){
      try {
        const response = await axios.get(
          `https://playground.4geeks.com/contact/agendas/${userName}`
        );
        setContactos(response.data.contacts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No se ha recibido usuario")
    }
   
  }, [userName]);

  const addContact = (newContact) => {
    setContactos(prevContacts => [...prevContacts, newContact]);
  };

  useEffect(() => {  
    getContacts();
  }, [getContacts, userName]); 

  return (
    <Context.Provider
      value={{ contactos, setContactos, getContacts, addContact, userName, setUserName }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider as Provider };