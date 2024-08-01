// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";

import { Context, Provider as ContextProvider } from "./Context-Provider/ContextProvider";

const App = () => (
  <BrowserRouter>
    <ContextProvider>
      <Layout />
    </ContextProvider>
  </BrowserRouter>
);

export default App;
