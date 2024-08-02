import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../Context-Provider/ContextProvider";
import axios from "axios";
import { useNavigate } from "react-router";

export const Home = () => {
  const context = useContext(Context);
  const [showButtons, setShowButtons] = useState(false);
  const [changeInputAlert, setChangeInputAlert] = useState(true)
  const navigate = useNavigate()

  useEffect(() =>{
    checkLogin()
  },[])

  const checkLogin = () => {
    if (context.userName){
      setShowButtons(true);
      setChangeInputAlert(false)
    }
    else {
      setShowButtons(false);
    }
  }

  const cerrarSesion = () => {
    context.setUserName("");
    setChangeInputAlert(true)
    setShowButtons(false);
  }

  const changeUserName = (e) => {
    context.setUserName(`${e.target.value}`);
  };

  const submitUserName = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://playground.4geeks.com/contact/agendas/${context.userName}`,
        context.userName,
        {
          headers: "accept: application/json",
        }
      );
      console.log(response.data);
      setShowButtons(true);
      context.getContacts(); // <- Aquí se actualizan los contactos
    } catch (error) {
      console.log("Error", error);
      if (error.response.status === 400) {
        console.log(context.userName);
        setChangeInputAlert(false);
        setShowButtons(true);
      }
    }
  };

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Bienvenido a tu lista de contactos</h1>
      <p className="lead mb-4">
        Esta es tu aplicación para gestionar todos tus contactos de manera fácil
        y eficiente.
      </p>
      <img
        src="https://images.unsplash.com/photo-1608610026254-da1c4f08ce9d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Contact Management"
        className="img-fluid rounded mb-4"
        style={{ maxWidth: "50%", height: "auto" }}
      />
      <div>

        {changeInputAlert ? (
          <div className="d-flex justify-content-center align-items-center my-3">
          <form className="form-group w-50 d-flex justify-content-center align-items-bottom" onSubmit={submitUserName}>
            <div className="me-4 w-75">
              <label className="form-label" htmlFor="userName">
                Crea un nuevo usuario:
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                value={context.userName}
                placeholder="Ingrese un nombre de usuario"
                className="form-control"
                onChange={changeUserName}
              ></input>
            </div>

            <button type="submit" className="btn btn-outline-success">
              Crear Usuario
            </button>
          </form>
        </div>
        ) : (
          <div className="my-4 mb-4 d-flex justify-content-center align-items-center">
          <alert className="alert-success p-2 px-5 fs-3 rounded-3 me-5">
            Ya has iniciado sesión
          </alert>
          <button onClick={cerrarSesion} className="btn btn-outline-danger" type="button"> Cerrar Sesión</button>
        </div>
        )}
        

        {showButtons && (
          <div className="d-flex justify-content-center">
            <div className="btn-group">
              <a onClick={() => {navigate("/contactos")}} className="btn btn-outline-primary rounded">
                Ver Lista de Contactos
              </a>
              <a
               onClick={() => {navigate("/nuevo-contacto")}}
                className="btn btn-outline-success ms-2 rounded"
              >
                Crear Nuevo Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
