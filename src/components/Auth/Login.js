import React, { Component, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import App from "../../App";
import AuthForm from "./AuthForm";
import AuthService from "../../services/auth.service";


export default function Login(props) {

	//--------------REDIRECTION APRES VALIDATION DU FORM--------
  const navigate = useNavigate();
  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (authentificated === true) {
      navigate('/Projects');
    }
  });

  //---------------State ---------------------

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [authentificated, setAuthentificated] = useState(false);

	// --------- Events -----------------------

	const OnChangeUsername = (e) => { setUsername(e.target.value);};

	const OnChangePassword = (e) => { setPassword(e.target.value);};

	const submitAuth = async (e) => {
		const Authentificated = await AuthService.login(username,password);
		if (Authentificated) {
			setIsValid(true);
			setAuthentificated(true);
		}	
		else {
			setIsValid(false);
		}	
	};


	// ------------- JSX ---------------
  return (
  	<>
  		<App></App>

    	<AuthForm
				UsernameFieldName = "user_username"
				UsernameFieldValue = {username}
				OnChangeUsername = {OnChangeUsername}
				PasswordFieldName = "user_password"
				PasswordFieldValue = {password}
				OnChangePassword = {OnChangePassword}
				submitAuth = {submitAuth}
				isValid = {isValid}
				validationMessage = "Authentification failed">		
      </AuthForm>

    </>
  );
}