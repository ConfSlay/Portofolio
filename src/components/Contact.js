import React, { useState , useEffect }  from "react"; //JSX
import { useNavigate } from "react-router-dom";
import App from "../App";
import ContactParticles from "./particles/ContactParticles";
 
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

  return (
    <>
      <ContactParticles />
      <div className="wrapper-form">
        <div className="box-form">

          <div className="item-form">
            <div className="label-form">Email</div> 
            <input type="text" className='textFields-form small' placeholder='johndoe@mail.com'></input>
          </div>

          <div className="item-form">
            <div className="label-form">Message</div>
            <textarea className='textArea-form' placeholder='Hello Mr.PERRET,'></textarea>
          </div>

          <input type="submit" className="item-form button-form" value="Send" onclick={sendMessage}></input> 
           

        </div>      
      </div>
    </>
  );
}
