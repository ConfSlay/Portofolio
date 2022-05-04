import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import GetAllProject from "./components/Project/GetAllProject";
import GetOneProject from "./components/Project/GetOneProject";
import CreateProject from "./components/Project/CreateProject";
import UpdateProject from "./components/Project/UpdateProject";
import NotFound from "./components/NotFound";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<GetAllProject />} />
      <Route path="/Project/:id" element={<GetOneProject />} />
      <Route path="/Project/create" element={<CreateProject/>} />
      <Route path="/Project/update/:id" element={<UpdateProject/>} /> 
      <Route path="/404" element={<NotFound/>} />
      <Route path="*" element={<NotFound/>} />

    </Routes>
  </BrowserRouter> 
); //render l'argument 1 <JSX> dans l'argument 2 <root element>