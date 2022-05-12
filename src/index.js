import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App page="Home" />} />
      <Route path="/Login" element={<App page="Login"  />} />
      <Route path="/Contact" element={<App page="Contact" />} />
      <Route path="/Projects" element={<App page="GetAllProject" />} />
      <Route path="/Project/:id" element={<App page="GetOneProject" />} />
      <Route path="/Project/create" element={<App page="CreateProject" />} />
      <Route path="/Project/update/:id" element={<App page="UpdateProject" />} />  
      <Route path="/404" element={<App page="NotFound"/>} />
      <Route path="*" element={<App page="NotFound"/>} />
    </Routes>
  </BrowserRouter> 
); //render l'argument 1 <JSX> dans l'argument 2 <root element>
