import React, { Component } from "react";
import javascriptLogo from "../image/icons/Javascript.png" ;
import reactLogo from "../image/icons/React.png" ;
import nodeLogo from "../image/icons/Node-js.png" ;
import cppLogo from "../image/icons/cpp.png" ;
import qtLogo from "../image/icons/Qt.png" ;
import gitLogo from "../image/icons/Git.png" ;
import figmaLogo from "../image/icons/Figma.png" ;
import logo from "../image/Thunder.svg";
import DustParticles from "./particles/DustParticles";
import profilePicture from "../image/ProfilePicture.png";

export default function Home(props) {
  return (
    <div className="wrapper-home">

      <DustParticles></DustParticles>

      <div className="name-container">
        <div className="title grey-home">RICHARD</div>
        <div className="title blue-home">PERRET</div>
      </div>

      <img className="logo-home" src={logo}></img>

      <div className="intro-container">
        <div className="text-intro">Full-stack engineer looking for his first professional experience in web development</div>
        <img className="picture-intro" src={profilePicture}></img>
      </div>

      <div className="techno-container">
        <img className="techno-image" src={javascriptLogo}></img>
        <img className="techno-image" src={reactLogo}></img>
        <img className="techno-image" src={nodeLogo}></img>
        <img className="techno-image" src={cppLogo}></img>
        <img className="techno-image" src={qtLogo}></img>
        <img className="techno-image" src={gitLogo}></img>
        <img className="techno-image" src={figmaLogo}></img>
      </div>

    </div>
  );
}
 