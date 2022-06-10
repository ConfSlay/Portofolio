import React, { useState, useEffect } from 'react'; //React pour JSX
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProjectDataService from "../../services/project.service";
import AuthService from "../../services/auth.service";
import App from "../../App";
import ToastDisplayer from "../ToastDisplayer";
import ButtonWithBorder from "./ButtonWithBorder";
 
export default function GetAllProject(props) {

  //----------------------- Initial State -------------------------
  const [projects,setProjects] = useState([]); //Déclare projects en tant qu'array vu qu'on va recevoir un tableau d'objets en json
  const navigate = useNavigate();

 // useEffect avec ,[])  = quand le composant est inétgré dans le DOM 
  useEffect(()=>{ 

    retrieveProjects(); 

  },[]) //notice the empty array here so it only happens once

  const retrieveProjects = () => {
    ProjectDataService.getAll()
      .then(response => {
        setProjects(response.data);
      })
      .catch(e => {
        console.log(e); 
      });
  }

  function deleteProject(id){ 

    //SWAL 
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Do you really want to delete this project ?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      iconColor : 'rgb(232,16,41)',
      confirmButtonColor: "rgb(232,16,41)",
      cancelButtonColor: "rgb(61,61,61)",
      background: 'rgb(33,33,33)',
      color : 'rgb(255,255,255)'
    }).then((result) => {
      if (result.isConfirmed) {
        //DELETE PROJECT
        ProjectDataService.delete(id)      
        .then(response => {
          setProjects(projects.filter(projects => projects.project_id !== id)); //enleve le project supprimé du state pour que ca refresh
          ToastDisplayer(false,"Project deleted !");
        })
        .catch(e => {
          ToastDisplayer(true,"An error occured ...");
          console.log(e);
        });
          
      }
    });
  }

  function redirectToUpdate(id){
    navigate("/Project/update/"+id);
  }
  


  // ----------------- JSX ---------------
  return (
    <div className="wrapper-project">
                 
      {projects && projects.map((project) => (

        <div className="item-project" key={project.project_id}>

          { props.isAdmin ? 

            <div className="buttons-project"> 
              
              <button className="deleteProjectButton-project alertDisplayerDelete_JS" 
                onClick={deleteProject.bind(this, project.project_id)}
              >Delete project</button>

              <button className="updateProjectButton-project" 
                onClick={redirectToUpdate.bind(this, project.project_id)}
              >Update project</button> 

            </div>

          :
            null
          }
   

          <span className="title-project"><b>{project.project_name}</b></span>

          <span className="tag-project">{project.project_technologies}</span>

          <img 
            className="image-project" 
            src={ProjectDataService.getUploadsFiles+project.project_thumbnail_filename}>
          </img>
          
          <ButtonWithBorder 
            classname = ""
            ButtonValue = "Discover"
            ButtonTo={"/Project/" + project.project_id}
            isInApp={true}>
          </ButtonWithBorder>
          
        </div>

      ))}

      { props.isAdmin ?

        <Link className="buttonAdd-project" to="/Project/create">Add new project</Link>

      :
        null
      }
              
    </div>
  );
}
 
 