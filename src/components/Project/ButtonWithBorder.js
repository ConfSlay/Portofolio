import React, { useState , useEffect }  from "react"; //JSX
import { Link, useNavigate } from "react-router-dom";
import ButtonBorder from "../../image/Button-border.svg" ;

 
export default function ButtonWithBorder(props) {

  return (
  <>
    { props.isInApp === true ?
      <Link className="button-container-project" to={props.ButtonTo}>
        <div className="button-border-project button-border-project-bot-left"></div>
        <div className="button-border-project button-border-project-top-right"></div>
        <div className="button-text-project" >{props.ButtonValue}</div>
      </Link>  
    :
    <>
      { props.isDownload === true ?

        <a className="button-container-project" href={props.ButtonTo}>
          <div className="button-border-project button-border-project-bot-left"></div>
          <div className="button-border-project button-border-project-top-right"></div>
          <div className="button-text-project" >{props.ButtonValue}</div>
        </a>
      :
        <a className="button-container-project" href={props.ButtonTo} target="_blank">
          <div className="button-border-project button-border-project-bot-left"></div>
          <div className="button-border-project button-border-project-top-right"></div>
          <div className="button-text-project" >{props.ButtonValue}</div>
        </a>
      }
    </>
    }
  </>


  );
}
