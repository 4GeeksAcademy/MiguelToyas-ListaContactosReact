import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import ListaDeContactos from "./views/ListaDeContactos";
import CrearNuevoContacto from "./views/CrearNuevoContacto";
import DetalleContacto from "./views/DetalleContacto";
import { Context, Provider as ContextProvider } from "./Context-Provider/ContextProvider";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  const context = useContext(Context);

  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactos" element={<ListaDeContactos />} />
              <Route path="/nuevo-contacto" element={<CrearNuevoContacto />} />
              <Route path="/contactos/:id" element={<DetalleContacto />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default Layout;
