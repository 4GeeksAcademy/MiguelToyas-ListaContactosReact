import React, { useContext, useEffect, useState } from "react";
import FormNuevoContacto from "../component/FormNuevoContacto";
import { Context } from "../Context-Provider/ContextProvider";
import { useNavigate } from "react-router";

function CrearNuevoContacto() {
  const context = useContext(Context)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!context.userName){
      alert("Tienes que iniciar sesión para acceder a la agenda")
      navigate('/')
    }
  },[])
  

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
