import React, { Component } from "react";
import App from "../App";
import logo from "../image/404.png";

export default function Home(props) {
  return (
    <>
      <App />
      <div className="wrapper-form">
        <img className="not-found-image" src={logo}></img>
      </div>

    </>
  );
}
 