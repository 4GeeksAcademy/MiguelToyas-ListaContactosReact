import React, { useState } from "react";
import axios from "axios";

function FormNuevoContacto() {
  const [datosForm, setDatosForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", datosForm);
    try {
      console.log("Intentando registrar nuevo contacto...");
      const response = await axios.post(
        `https://playground.4geeks.com/contact/agendas/mitoperni/contacts`,
        datosForm
      );
      console.log("Respuesta del servidor:", response); // Verifica la respuesta del servidor
      console.log("Usuario registrado:", response.data);
      alert("Nuevo contacto creado");
    } catch (error) {
      console.error("Error registrando el nuevo contacto:", error);
    }
    setDatosForm({
        name: "",
        phone: "",
        email: "",
        address: "",
      })
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
    </div>
  );
}

export default FormNuevoContacto;
