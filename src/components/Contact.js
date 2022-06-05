import React, { useState , useEffect }  from "react"; //JSX
import { useNavigate } from "react-router-dom";
import ContactDataService from "../services/contact.service";
import ToastDisplayer from "./ToastDisplayer";
import Swal from "sweetalert2";
// Assets and particles
import linkedinLogo from "../image/icons/Linkedin.png";
import githubLogo from "../image/icons/Github.png" ;
import sendIcon from "../image/icons/sendIcon.png" ;
import border from "../image/border.svg" ;
import DustParticles from "./particles/DustParticles"
 
export default function Contact(props) {

 const navigate = useNavigate();

  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (mail.mail_sent) {
      navigate('/');
    }

  });

  //---------------- STATE ----------------
  const [disabledSubmit, setDisabledSubmit] = useState(false); // Bloquage du bouton submit durant process

  const [mail, setMail] = useState({
    mail_name : "",
    mail_email : "",
    mail_message: "",
    mail_sent: false,
  });


  // ------------------------- Evenementiel (modification du state en fonction des inputs) -------------------------

  const onChangeMail_name = (e) => {
    console.log(mail.mail_name);
    console.log(e.target.value);
    setMail(prevState => {
      return { ...prevState, mail_name : e.target.value }
    });
  }

  const onChangeMail_email = (e) => {
    setMail(prevState => {
      return { ...prevState, mail_email : e.target.value }
    });
  }

  const onChangeMail_message = (e) => {
    setMail(prevState => {
      return { ...prevState, mail_message : e.target.value }
    });
  }

  //------------------------------------ CALL API ----------------------------------------------------------

  const sendMessage = () => {
    if (disabledSubmit === false){
      setDisabledSubmit(true);
      //SWAL Loading
      Swal.fire({
        title: 'Sending Email',
        position: 'center',
        background: 'rgb(33,33,33)',
        color : 'rgb(200,200,200)',
        iconColor : 'rgb(232,16,41)',
        didOpen: () => {
          Swal.showLoading()
        },
      }) //elle se fermera automatiquement quand un autre appel swal sera fait plus bas #systèmeD

      ContactDataService.Contact(mail)
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            //SWAL
            ToastDisplayer(false, "Your message has been successfully sent !");
            setMail(prevState => {
              return { ...prevState, mail_sent : true}
            });
          }
        })
        .catch(e => {
          if (e.response.status === 422) {
            //SWAL 
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Name : 3 characters min \n Email : valid email address \n Message : 20 characters min',
              showCancelButton: false,
              showConfirmButton: true,
              confirmButtonText: 'Ok',
              iconColor : '#3A4EB3',
              confirmButtonColor: "#3A4EB3",
              background: 'rgb(33,33,33)',
              color : 'rgb(200,200,200)'
            });
          }
          else {
            //SWAL Server error
            ToastDisplayer(true, "Internal server error ...");
          } 
        });

      setDisabledSubmit(false);
    }
  };


  //------------------------------------ Links ----------------------------------------------------------

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

  //------------------------------------ JSX ----------------------------------------------------------

  return (
    <div className="content-container">

      <DustParticles></DustParticles>

      <img src={border} className="border-top-left"></img>
      <img src={border} className="border-bot-right"></img>

      <div className="title-container">
        <div className="title grey">WANT TO GET</div>
        <div className="title blue">IN TOUCH ?</div>
      </div>

      <div className="box-form-contact">
        <img className="button-form-contact" src={sendIcon} onClick={sendMessage}></img>

        <div className="title-form-contact">Send me a message</div>

        <input 
          type="text" 
          className='textFields-form-contact' 
          id="mail_name"
          value={mail.mail_name} 
          name="mail_name"            
          placeholder='Name'
          onChange= {onChangeMail_name}>
        </input>

        <input 
          type="text" 
          className='textFields-form-contact'          
          id="mail_email"
          value={mail.mail_email} 
          name="mail_email"
          placeholder='Email'
          onChange= {onChangeMail_email}>
        </input>

        <textarea 
          className='textArea-form-contact' 
          id="mail_message"
          value={mail.mail_message} 
          name="mail_message"         
          placeholder='Message'
          onChange= {onChangeMail_message}>
        </textarea>           
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
