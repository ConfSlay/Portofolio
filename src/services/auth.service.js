import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL + "/api/auth/";

const login = async (username, password) => {

  const authentification = await axios.post(API_URL + "login", {username,password,})
    .catch(error => { //tout code http autre que 200 sera ici
      return false;
  });


  if (authentification === false)
  {
    return false;
  }
  else 
  {
    localStorage.setItem("user", JSON.stringify(authentification.data));
    return true;
  }
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  
  return JSON.parse(localStorage.getItem("user"));
  
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
