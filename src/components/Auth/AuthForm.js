import React, { Component } from "react";
import App from "../../App";
import IdentifiantField from "./IdentifiantField";
import PasswordField from "./PasswordField";

export default function AuthForm(props) {

  return (
    <>
      <App />

      <div className="wrapper-form">
        <div className="box-form">

          <IdentifiantField
            labelName=
            fieldName=
            fieldValue=
            onChangeEvent=
          >
          </IdentifiantField>

          <PasswordField
            labelName=
            fieldName=
            fieldValue=
            onChangeEvent= 
          >
          </PasswordField>

          { props.isValid === false ?

            <div className="item-form errorMessage">{props.validationMessage}</div>
          : 
                null 
          }

          <button className="item-form button-form" onClick={props.saveProject}>Connect</button>

        </div>
      </div>

    </>
  );
}