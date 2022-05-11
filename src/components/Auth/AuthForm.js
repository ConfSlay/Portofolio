import React, { Component } from "react";
import App from "../../App";
import IdentifiantField from "./IdentifiantField";
import PasswordField from "./PasswordField";

export default function AuthForm(props) {

  return (

      <div className="wrapper-form">
        <div className="box-form">

          <IdentifiantField
            labelName="Username"
            fieldName={props.UsernameFieldName}
            fieldValue={props.UsernameFieldValue}
            onChangeEvent={props.OnChangeUsername}
          >
          </IdentifiantField>

          <PasswordField
            labelName="Password"
            fieldName={props.PasswordFieldName}
            fieldValue={props.PasswordFieldValue}
            onChangeEvent={props.OnChangePassword}
          >
          </PasswordField>

          { props.isValid === false ?

            <div className="item-form errorMessage">{props.validationMessage}</div>
          : 
                null 
          }

          <button className="item-form button-form" onClick={props.submitAuth}>Connect</button>

        </div>
      </div>
  );
}