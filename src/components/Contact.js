import React, { useState , useEffect }  from "react"; //JSX
import { useNavigate } from "react-router-dom";
import App from "../App";
import ContactParticles from "./particles/ContactParticles";
import linkedinLogo from "../image/icons/Linkedin.svg";
import githubLogo from "../image/icons/Github.svg" ;
import sendIcon from "../image/icons/sendIcon.svg" ;
import border from "../image/border.svg" ;
 
export default function Contact(props) {

  //---------------- STATE ----------------
  const [disabledSubmit, setDisabledSubmit] = useState(false); // Bloquage du bouton submit durant process

  const sendMessage = () => {
    if (disabledSubmit === false){
      setDisabledSubmit(true);
      // DO STUFF
      // ....
      setDisabledSubmit(false);
    }
  };

  const goToSocial = (e) => {
    switch (e) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/richardperret/", "_blank") //LinkedIn
        break;
      case "github":
        window.open("https://github.com/ConfSlay", "_blank") //Github
        break;
      default:
        break;
    }
  }

  return (
    <div className="content-container">

      <img src={border} className="border-top-left"></img>
      <img src={border} className="border-bot-right"></img>

      <div className="title-container">
        <div className="title grey">WANT TO GET</div>
        <div className="title blue">IN TOUCH ?</div>
      </div>

      <div className="box-form-contact">
        <img className="button-form-contact" src={sendIcon} onClick={sendMessage}></img>
        <div className="title-form-contact">Send me a message</div>
        <input type="text" className='textFields-form-contact' placeholder='Name'></input>
        <input type="text" className='textFields-form-contact' placeholder='Email'></input>
        <textarea className='textArea-form-contact' placeholder='Message'></textarea>           
      </div>    

      <div className="social-container">
        <div className="linkedin-container" onClick={() => {goToSocial("linkedin")} } >
          <img src={linkedinLogo}></img>
        </div>
        <div className="github-container" onClick={() => {goToSocial("github")} } >
          <img src={githubLogo}></img>
        </div>
      </div>  
    </div>
  );
}
