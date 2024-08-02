import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../Context-Provider/ContextProvider";
import axios from "axios";

function DetalleContacto() {
  const { id } = useParams();
  const context = useContext(Context);
  const [contacto, setContacto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  useEffect(()=>{
    if(!context.userName){
      alert("Tienes que iniciar sesión para acceder a la agenda")
      navigate('/')
    }
  },[])

  useEffect(() => {
    if (context.contactos.length > 0) {
      const selectedContact = context.contactos.find(
        (contact) => contact.id === parseInt(id)
      );
      setContacto(selectedContact);
      setFormData({
        name: selectedContact.name,
        phone: selectedContact.phone,
        email: selectedContact.email,
        address: selectedContact.address,
      });
    }
  }, [context.contactos, id]);

  const borrarContacto = async () => {
    try {
      const response = await axios.delete(
        `https://playground.4geeks.com/contact/agendas/${context.userName}/contacts/${id}`
      );
      if (response) {
        console.log(contacto.name + " Eliminado con éxito");
        context.setContactos(prevContacts => prevContacts.filter(c => c.id !== parseInt(id)));
        navigate("/contactos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editarContacto = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://playground.4geeks.com/contact/agendas/${context.userName}/contacts/${id}`,
        formData
      );
      if (response) {
        console.log(contacto.name + " Editado con éxito");
        context.getContacts();
        setIsEditing(false);
        setContacto({ ...contacto, ...formData });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const confirmarModal = () => {
    setShowModal(true);
  };

  const handleConfirmarModal = () => {
    borrarContacto();
    setShowModal(false);
  };

  const handleCerrarModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!contacto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4">
      <h1>Detalle de Contacto:</h1>
      <div className="card mx-auto" style={{ width: "60rem" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <img
              src="https://fineartsconference.com/wp-content/uploads/2023/02/image-placeholder-icon-11.png"
              className="card-img-top w-100"
              alt="..."
            />
          </div>
          <div className="w-50 ms-3">
            <div className="card-body">
              <h4 className="card-title">{contacto.name}</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa-solid fa-phone"></i> : {contacto.phone}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-envelope"></i> : {contacto.email}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-location-dot"></i> :{" "}
                {contacto.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body">
          <button
            type="button"
            className="btn btn-warning me-5"
            onClick={() => setIsEditing(true)}
          >
            Editar contacto
          </button>
          <button
            type="button"
            className="btn btn-danger me-2"
            onClick={confirmarModal}
          >
            Borrar contacto
          </button>
        </div>
      </div>

      {isEditing && (
        <form onSubmit={editarContacto} className="mt-4">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Guardar cambios
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setIsEditing(false)}
          >
            Cancelar
          </button>
        </form>
      )}

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
                <h5 className="modal-title">
                  Borrar el contacto de {contacto.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCerrarModal}
                ></button>
              </div>
              <div className="modal-body">
                Si eliminas el contacto perderás todos los datos de{" "}
                {contacto.name} y no podrás volver a recuperarlos. ¿Estás seguro
                de querer eliminarlo?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCerrarModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmarModal}
                >
                  Borrar Contacto
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

export default DetalleContacto;
