import React, { Component } from "react";

export default function   PasswordField(props) {

  return (
    <div className="item-form">
      <div className="label-form">{props.labelName}</div>

      <input 
        type="password" 
        className="textFields-form small"
        id={props.fieldName} 
        value={props.fieldValue} 
        onChange={props.onChangeEvent} 
        name={props.fieldName}
      />
    </div>
  );
}