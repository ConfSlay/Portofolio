import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import Base from "./Base";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Contact from "./components/Contact";
import GetAllProject from "./components/Project/GetAllProject";
import GetOneProject from "./components/Project/GetOneProject";
import CreateProject from "./components/Project/CreateProject";
import UpdateProject from "./components/Project/UpdateProject";
import NotFound from "./components/NotFound";



export default function App(props) {

    //--------------REDIRECTION APRES LOGOUT  --------
    const navigate = useNavigate();
    useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute

        // ----- Check if Admin -------------
        const admin = AuthService.getCurrentUser();
        if (admin)
        {
            setIsAdmin(true); 
        }
        else
        {
            setIsAdmin(false); 
        }

        if (redirect === true)
        {
            setRedirect(false);
            navigate('/Projects');
        }

    });

    // --------- STATE --------------
    const [isAdmin, setIsAdmin] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const logout = () => {
        AuthService.logout();
        setIsAdmin(false);
        if (props.page === 'CreateProject' || props.page === 'UpdateProject')
        {
            setRedirect(true);
        }
        
    };


    // ------------ JSX ------------------
    return (
      <>   
       <Base logout={logout} isAdmin={isAdmin} />
       
        {
            {
                'Home': <Home />,
                'Login': <Login  />,
                'Contact': <Contact />,
                'GetAllProject': <GetAllProject isAdmin={isAdmin}/>,
                'GetOneProject': <GetOneProject isAdmin={isAdmin}/>,
                'CreateProject': <CreateProject isAdmin={isAdmin}/>,
                'UpdateProject': <UpdateProject isAdmin={isAdmin}/>,
                "NotFound" :  <NotFound />             
            }[props.page]
        }
    </>

    );
}
