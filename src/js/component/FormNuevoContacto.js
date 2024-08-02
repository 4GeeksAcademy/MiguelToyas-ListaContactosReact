import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context-Provider/ContextProvider";
import { useContext } from "react";

function FormNuevoContacto() {
  const [datosForm, setDatosForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { addContact } = useContext(Context);
  const context = useContext(Context)


  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://playground.4geeks.com/contact/agendas/${context.userName}/contacts`,
        datosForm
      );
      console.log("Usuario registrado:", response.data);
      addContact(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error registrando el nuevo contacto:", error);
    }
    setDatosForm({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToContactList = () => {
    navigate("/contactos");
  };

  return (
    <div className="border rounded p-0 mb-4 mt-3">
      <form onSubmit={handleSubmit} className="">
        {[
          { id: "name", label: "Nombre", type: "text" },
          { id: "address", label: "Dirección del contacto", type: "text" },
          { id: "phone", label: "Número de teléfono", type: "text" },
          { id: "email", label: "Email", type: "email" },
        ].map((field) => (
          <div className="form-group m-3" key={field.id}>
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              name={field.id}
              value={datosForm[field.id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="container-fluid m-0 rounded-bottom bg-secondary-subtle d-flex justify-content-end">
          <button type="submit" className="btn btn-success my-3">
            Crear Nuevo Contacto
          </button>
        </div>
      </form>

      {showModal && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nuevo Contacto Creado</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                El nuevo contacto ha sido creado exitosamente.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleCloseModal}
                >
                  Crear Otro Contacto
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleGoToContactList}
                >
                  Acceder a la Lista de Contactos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default FormNuevoContacto;
