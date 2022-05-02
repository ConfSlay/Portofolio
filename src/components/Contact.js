import React from "react"; //JSX
import App from "../App";
import ContactParticles from "./particles/ContactParticles";
 
export default function Contact(props) {
  return (
    <>
      <ContactParticles />
      <App />
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

          <input type="submit" className="item-form button-form" value="Send"/> 
          {/* onclick={} */}

        </div>      
      </div>
    </>
  );
}
