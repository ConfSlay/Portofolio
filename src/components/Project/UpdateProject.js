import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ProjectDataService from "../../services/project.service";
//Components
import App from "../../App";
import FormProject from "./FormProject";
import ToastDisplayer from "../ToastDisplayer";

export default function UpdateProject(props) {

  //----------------------------REDIRECTION APRES VALIDATION DU FORM ou 404 -----------------------
  const navigate = useNavigate();
  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (project.project_is_updated) {
      navigate('/Projects');
    }
    if (notFound === true)
    {
      navigate('/NotFound');
    }
    if (dataFound === true)
    {
      setRemoveButtons();
    }

    // ----- Check if Admin AND redirect if not-------------
    if (!props.isAdmin)
    {
        navigate('/Projects');
    }
  });


  //--------------------------------- State Initial -------------------------------------

  const [disabledSubmit, setDisabledSubmit] = useState(false); // Bloquage du bouton submit durant process

  const [notFound,setNotFound] = useState (false); //id not found

	const [project,setProject] = useState( //déclare en tant que liste key/value
  { 
      project_name: "",
      project_technologies: "",
      project_description: "",
      project_thumbnail_filename: null,
      project_is_youtube_not_images : true,
      project_youtube_link : "",
      project_images: [],
      project_is_file_format: true,
      project_release_filename: null,
      project_release_url: "",
      project_is_updated: false,
  });

  //Pour reset une et une seule fois, en mode update, le champ file 
  // cad supprimer le fichier côté serveur
  const [dataFound,setDataFound] = useState(false);
  const [removeThumbnailPossibility,setRemoveThumbnailPossibility] = useState(false);
  const [removeImagesPossibility, setRemoveImagesPossibility] = useState(false);
  const [removeReleaseFilePossibility,setRemoveReleaseFilePossibility] = useState(false);

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

  const [youtubeLinkValidation, setYoutubeLinkValidation] = useState({
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

  // --------------- actualisation du state pour MODE UPDATE (herité avec props) -------------------------------
  
  const { id } = useParams(); //Retrouve le paramètre id
  useEffect(() => { // à l'instanciation du component     
      getProject(id);
  },[]) //notice the empty array here so it only happens once 

  const getProject = (id) => {
    ProjectDataService.get(id)
      .then(response => {
        setProject(response.data);
        setDataFound(true); //pour définir les options de removes avec croix rouge   
      })
      .catch(e => {
        setNotFound(true);
        console.log(e);
      });
  }

  const setRemoveButtons = () => {
    setRemoveThumbnailPossibility(true); //Enclenche la possibilité de supprimer le fichier côté serveur
    if (project.project_is_youtube_not_images === false) //seulement si c'est un release de type file
    {
      setRemoveImagesPossibility(true); //Enclenche la possibilité de supprimer le fichier côté serveur
    }    
    if (project.project_is_file_format === true) //seulement si c'est un release de type file
    {
      setRemoveReleaseFilePossibility(true); //Enclenche la possibilité de supprimer le fichier côté serveur
    }
    setDataFound(undefined); //Reset pour éviter que ca ne relance cette fonction à chaque modif du state
  }

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

  const onResetProject_thumbnail_filename = () => {
    setProject(prevState => {
      return { ...prevState, project_thumbnail_filename : null } //pcq c'est un fichier
    });
    setRemoveThumbnailPossibility(false);
  }

  const onChangeProject_is_youtube_not_images = (e) => {
    let result = true; 
    //si on passe e.target.value, project_is_file_format pointera sur un objet et non une valeur
    // du coup setState n'aura plus d'incidence
    if (e.target.value === "true")
    {
      result = true;
      setProject(prevState => {
        return { ...prevState, project_images_updated : false } //pcq c'est un fichier
      });
    }
    else {
      result = false;
      setProject(prevState => {
        return { ...prevState, project_images_updated : true } //pcq c'est un fichier
      });
    }
    setProject(prevState => {
      return { ...prevState, project_is_youtube_not_images : result }
    });
  }

  const onChangeProject_youtube_link = (e) => {
    setProject(prevState => {
      return { ...prevState, project_youtube_link :  e.target.value  } 
    });

  }

  const onChangeProject_images = (e) => {
    setProject(prevState => {
      return { ...prevState, project_images : e.target.files } //pas d'index pcq c'est multifile
    });
  }

  const onResetProject_images = () => {
    setProject(prevState => {
      return { ...prevState, project_images_updated : true } //pcq c'est un fichier
    });
    setRemoveImagesPossibility(false);
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

  const onResetProject_release_filename = () => {
    setProject(prevState => {
      return { ...prevState, project_release_filename : null } //pcq c'est un fichier
    });
    setRemoveReleaseFilePossibility(false);
  }

  const onChangeProject_release_url = (e) => {
    setProject(prevState => {
      return { ...prevState, project_release_url : e.target.value }
    });
  } 

//------------------------------------ CALL API ----------------------------------------------------------

  const saveProject = (e) => {

    if (disabledSubmit === false){
      setDisabledSubmit(true);

      //------------- instanciation d'un objet FormData pour envoyer les données à l'API --------------   
      let data = new FormData(); // --> "content" : "multipart/form-data"
      data.append('project_name', project.project_name);
      data.append('project_technologies', project.project_technologies);
      data.append('project_description', project.project_description);
      data.append('project_thumbnail_filename', project.project_thumbnail_filename);
      data.append('project_is_youtube_not_images', project.project_is_youtube_not_images);
      data.append('project_youtube_link', project.project_youtube_link);
      // images files
      data.append('project_images_updated', project.project_images_updated);
      //Si les images ont été modifiés par l'utilisateur
      if ( project.project_images_updated === true && project.project_is_youtube_not_images === false) 
      {
        for (let i = 0; i < project.project_images.length; i++) {
          data.append(`project_images`, project.project_images[i]);
        }    
      }  

      data.append('project_is_file_format', project.project_is_file_format);
      data.append('project_release_filename', project.project_release_filename);
      data.append('project_release_url', project.project_release_url);

      //--------------------------------- Request --------------------------------------
      ProjectDataService.update(id,data)
        .then(response => {
          setProject(prevState => {
            return { ...prevState, project_is_updated : true }
          });
          //SWAL
          ToastDisplayer(false, "Project updated !");
        })
        .catch(e => {
          if (e.response.status === 422) {

            // Reset des states pour éviter que certains messages persistent même apres correction
          setNameValidation({isValid : true, message : ""});
          setTechnologiesValidation({isValid : true, message : ""});
          setDescriptionValidation({isValid : true, message : ""});
          setThumbnailValidation({isValid : true, message : ""});
          setYoutubeLinkValidation({isValid : true, message : ""});
          setImagesValidation({isValid: true, message:""});
          setReleaseFileValidation({isValid : true, message : ""});
          setReleaseUrlValidation({isValid : true, message : ""}) ;
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
                case "project_youtube_link":
                  setYoutubeLinkValidation({isValid : false, message : error.msg});
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
            // SWAL
            ToastDisplayer(true, "Internal server error ...");
          }  
        });

      setDisabledSubmit(false);
    }
   
  }


//----------------------------------------------------------- JSX -----------------------------------------------------

	return (

			<FormProject
				mode="update"
				project= {project}

				onChangeProject_name = {onChangeProject_name}
	  		onChangeProject_technologies = {onChangeProject_technologies}
	  		onChangeProject_description = {onChangeProject_description}
	  		onChangeProject_thumbnail_filename = {onChangeProject_thumbnail_filename}
        onChangeProject_is_youtube_not_images = {onChangeProject_is_youtube_not_images}
        onChangeProject_youtube_link = {onChangeProject_youtube_link}
	  		onChangeProject_images = {onChangeProject_images}
	  		onChangeProject_is_file_format = {onChangeProject_is_file_format}
	  		onChangeProject_release_filename = {onChangeProject_release_filename}
	  		onChangeProject_release_url = {onChangeProject_release_url}

	  		removeThumbnailPossibility = {removeThumbnailPossibility}
	  		removeImagesPossibility = {removeImagesPossibility} 
	  		removeReleaseFilePossibility = {removeReleaseFilePossibility}

	  		onResetProject_images = {onResetProject_images}
	  		onResetProject_thumbnail_filename = {onResetProject_thumbnail_filename} 
	  		onResetProject_release_filename = {onResetProject_release_filename}

				nameValidation = {nameValidation}
				technologiesValidation = {technologiesValidation}
				descriptionValidation = {descriptionValidation}
				thumbnailValidation = {thumbnailValidation}
        youtubeLinkValidation = {youtubeLinkValidation}
				imagesValidation = {imagesValidation}
				releaseFileValidation = {releaseFileValidation}
				releaseUrlValidation = {releaseUrlValidation}

				saveProject = {saveProject}
			>
			</FormProject>

	);
}