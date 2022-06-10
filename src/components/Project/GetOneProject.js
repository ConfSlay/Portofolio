import React, { useState, useEffect } from 'react';
import { Link , useParams , useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProjectDataService from "../../services/project.service";
import AuthService from "../../services/auth.service";
import App from "../../App";
import ToastDisplayer from "../ToastDisplayer";
import Caroussel from "./Caroussel";
import ButtonWithBorder from "./ButtonWithBorder";

export default function GetOneProject(props) {

  //----------------------------REDIRECTION APRES click sur bouton update ou incorrect :id-----------------------
  const navigate = useNavigate();
  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (redirect === true) {
      navigate('/Projects');
    }
    if (notFound === true)
    {
      navigate('/NotFound');
    }
  });

  function redirectToUpdate(id){
    navigate("/Project/update/"+id);
  }

  // ----------------- Initialize State -------------------
  const [notFound,setNotFound] = useState (false); //id not found
  const [loaded,setLoaded] = useState (false); //data not loaded 

  const [project,setProject] = useState( //déclare project en tant que liste key/value
    {
      project_id: null,
      project_name: "",
      project_technologies: "",
      project_description: "",
      project_thumbnail_filename: "",
      project_images : null,
      project_is_file_format: true,
      project_release_filename: "",
      project_release_url: "" 
    }
  );

  const [redirect,setRedirect] = useState (false);

  // ----------------- Get request params -------------------
  const { id } = useParams(); //Retrouve le paramètre id
  // useEffect = quand le composant est inétgré dans le DOM 
  useEffect(()=>{ getProject(); },[]) //notice the empty array here so it only happens once

  const getProject = () => {
    ProjectDataService.get(id)
      .then(response => {
        setProject(response.data);
        console.log(response.data);
        setLoaded(true);
      })
      .catch(e => {
        setNotFound(true);
        console.log(e);
      });
  }
  
  const deleteProject = (id) => { 
    //SWAL
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Do you really want to delete this project ?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: "Non",
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
            console.log(response.data);
            ToastDisplayer(false,"Project deleted !");
            setRedirect(true); //Redirection vers page virtuelle Project
        })
        .catch(e => {
            ToastDisplayer(true,"An error occured ...");
            console.log(e);
        });
      }
    });
  }

  return (
    <div className="wrapper-discover">
      <div className="box-discover">


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

        

        <div className="item-discover"> 
          <div className="title-discover"><b>{project.project_name}</b></div>
          <div className="tag-discover">{ project.project_technologies }</div>  
        </div>

        <div className="item-discover description-discover">{ project.project_description }</div>

        { project.project_is_youtube_not_images === false ? 
          <Caroussel
            loaded={loaded}
            project={project}
          >
          </Caroussel>

        :

          <iframe 
            className="youtube-discover item-discover" 
            src={project.project_youtube_link} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        }


        { project.project_is_file_format === true ? 
          <ButtonWithBorder 
            ButtonValue = "Download"
            classname = "item-discover"
            ButtonTo={ProjectDataService.getUploadsFiles+project.project_release_filename}
            isInApp={false}
            isDownload={true}>
          </ButtonWithBorder>
        :
          <ButtonWithBorder 
            ButtonValue = "Link"
            classname = "item-discover"
            ButtonTo={project.project_release_url}
            isInApp={false}
            isDownload={false}>
          </ButtonWithBorder>
        }  

      </div>
  </div>
  );
}


 