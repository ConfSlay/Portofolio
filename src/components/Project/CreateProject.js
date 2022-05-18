import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ProjectDataService from "../../services/project.service";
//Components
import App from "../../App";
import FormProject from "./FormProject";
import ToastDisplayer from "../ToastDisplayer";

export default function CreateProject(props) {

	//----------------------------REDIRECTION APRES VALIDATION DU FORM ou UNAUTHORIZED-----------------------

  const navigate = useNavigate();

  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (project.project_is_created) {
      navigate('/Projects');
    }

    // ----- Check if Admin AND redirect if not-------------
    if (!props.isAdmin)
    {
        navigate('/Projects');
    }

  });

  //--------------------------------- State Initial -------------------------------------

  const [disabledSubmit, setDisabledSubmit] = useState(false); // Bloquage du bouton submit durant process

	const [project,setProject] = useState( //déclare en tant que liste key/value
  { 
      project_name: "",
      project_technologies: "",
      project_description: "",
      project_thumbnail_filename: null,
      project_images: [],
      project_is_file_format: true,
      project_release_filename: null,
      project_release_url: "",
      project_is_created: false,
  });

	const [nameValidation, setNameValidation] = useState({
    isValid : true,
    message : ""
  })

  const [technologiesValidation, setTechnologiesValidation] = useState({
    isValid : true,
    message : ""
  })

  const [descriptionValidation, setDescriptionValidation] = useState({
    isValid : true,
    message : ""
  })

  const [thumbnailValidation, setThumbnailValidation] = useState({
    isValid : true,
    message : ""
  })

  const [imagesValidation, setImagesValidation] = useState({
    isValid : true,
    message : ""
  }) 

  const [releaseFileValidation, setReleaseFileValidation] = useState({
    isValid : true,
    message : ""
  })

  const [releaseUrlValidation, setReleaseUrlValidation] = useState({
    isValid : true,
    message : ""
  })

// ------------------------- Evenementiel (modification du state en fonction des inputs) -------------------------

  const onChangeProject_name = (e) => {
    setProject(prevState => {
      return { ...prevState, project_name : e.target.value }
    });
  }

  const onChangeProject_technologies = (e) => {
    setProject(prevState => {
      return { ...prevState, project_technologies : e.target.value }
    });
  }

  const onChangeProject_description = (e) => {
    setProject(prevState => {
      return { ...prevState, project_description : e.target.value }
    });
  }

  const onChangeProject_thumbnail_filename = (e) => {
    setProject(prevState => {
      return { ...prevState, project_thumbnail_filename : e.target.files[0] } //pcq c'est un fichier
    });
  }

  const onChangeProject_images = (e) => {
    setProject(prevState => {
      return { ...prevState, project_images : e.target.files } //pas d'index pcq c'est multifile
    });
  }

  const onChangeProject_is_file_format = (e) => {
    let result = true; 
    //si on passe e.target.value, project_is_file_format pointera sur un objet et non une valeur
    // du coup setState n'aura plus d'incidence
    if (e.target.value === "true")
    {
      result = true;
    }
    else {
      result = false;
    }
    setProject(prevState => {
      return { ...prevState, project_is_file_format : result }
    });
  }

  const onChangeProject_release_filename = (e) => {
    setProject(prevState => {
      return { ...prevState, project_release_filename : e.target.files[0]  }
    });
  }

  const onChangeProject_release_url = (e) => {
    setProject(prevState => {
      return { ...prevState, project_release_url : e.target.value }
    });
  } 

//------------------------------------ CALL API ----------------------------------------------------------

 const saveProject = (e) => {

    if (disabledSubmit === false) {
      setDisabledSubmit(true);

      //------------- instanciation d'un objet FormData pour envoyer les données à l'API --------------   
      let data = new FormData(); // --> "content" : "multipart/form-data"
      data.append('project_name', project.project_name);
      data.append('project_technologies', project.project_technologies);
      data.append('project_description', project.project_description);
      data.append('project_thumbnail_filename', project.project_thumbnail_filename);

      for (let i = 0; i < project.project_images.length; i++) { // images files
        data.append(`project_images`, project.project_images[i]);
      }    

      data.append('project_is_file_format', project.project_is_file_format);
      data.append('project_release_filename', project.project_release_filename);
      data.append('project_release_url', project.project_release_url);

      //--------------------------------- Request --------------------------------------
      ProjectDataService.create(data)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setProject(prevState => {
            return { ...prevState, project_is_created : true }
          });

          //SWAL
          ToastDisplayer(false, "Project created !");

        }
      })
      .catch(e => {
        if (e.response.status === 422) {

          //SWAL
          ToastDisplayer(true, "Incorrect input");

          // Reset des states pour éviter que certains messages persistent même apres correction
          setNameValidation({isValid : true, message : ""})
          setTechnologiesValidation({isValid : true, message : ""})
          setDescriptionValidation({isValid : true, message : ""})
          setThumbnailValidation({isValid : true, message : ""})
          setImagesValidation({isValid: true, message:""})
          setReleaseFileValidation({isValid : true, message : ""})
          setReleaseUrlValidation({isValid : true, message : ""}) 
          // Gestion des erreurs et ajout au state error
          e.response.data.errors.forEach(error => {
            switch (error.param) { 
              case "project_name":
                setNameValidation({isValid : false, message : error.msg});
                break;
              case "project_technologies":
                setTechnologiesValidation({isValid : false, message : error.msg});
                break;
              case "project_description":
                setDescriptionValidation({isValid : false, message : error.msg});
                break;
              case "project_thumbnail_filename":
                setThumbnailValidation({isValid : false, message : error.msg});
                break;
              case "project_images":
                setImagesValidation({isValid : false, message : error.msg});
                break;
              case "project_release_filename":
                setReleaseFileValidation({isValid : false, message : error.msg});
                break;
              case "project_release_url":
                setReleaseUrlValidation({isValid : false, message : error.msg});
                break;
            }          
          });
        }
        else 
        {
          //SWAL Server error
          ToastDisplayer(true, "Internal server error ...");
        } 
      });

      setDisabledSubmit(false);
    }
  } 
    

//----------------------------------------------------------- JSX -----------------------------------------------------

	return (

			<FormProject
				mode="create"
				project= {project}

				onChangeProject_name = {onChangeProject_name}
	  		onChangeProject_technologies = {onChangeProject_technologies}
	  		onChangeProject_description = {onChangeProject_description}
	  		onChangeProject_thumbnail_filename = {onChangeProject_thumbnail_filename}
	  		onChangeProject_images = {onChangeProject_images}
	  		onChangeProject_is_file_format = {onChangeProject_is_file_format}
	  		onChangeProject_release_filename = {onChangeProject_release_filename}
	  		onChangeProject_release_url = {onChangeProject_release_url}

	  		removeThumbnailPossibility = {false}
	  		removeImagesPossibility = {false} 
	  		removeReleaseFilePossibility = {false}
	  		onResetProject_images = {null}
	  		onResetProject_thumbnail_filename = {null} 
	  		onResetProject_release_filename = {null}

				nameValidation = {nameValidation}
				technologiesValidation = {technologiesValidation}
				descriptionValidation = {descriptionValidation}
				thumbnailValidation = {thumbnailValidation}
				imagesValidation = {imagesValidation}
				releaseFileValidation = {releaseFileValidation}
				releaseUrlValidation = {releaseUrlValidation}

				saveProject = {saveProject}
			>
			</FormProject>

	);
}