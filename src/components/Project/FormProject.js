import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ProjectDataService from "../../services/project.service";
import App from "../../App"
import deleteLogo from "../../image/delete.png";

export default function FormProject(props) {

  //----------------------------REDIRECTION APRES VALIDATION du form ou incorrect :id-----------------------
  const navigate = useNavigate();
  useEffect(() => { //si le composant a été updated d'une manière quelconque (state) alors ca s'execute
    if (project.project_is_created_or_updated) {
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

  });

  //----------------------------State initial ------------------------------
  const [notFound,setNotFound] = useState (false); //id not found

  const [project,setProject] = useState( //déclare en tant que liste key/value
    { 
      project_id: null,
      project_name: "",
      project_technologies: "",
      project_description: "",
      project_thumbnail_filename: null,
      project_images : [], //array vide et pas null sinon ca déconne niveau jsx vu qu'on itère avec forEach()
      project_images_updated : false,
      project_is_file_format: true,
      project_release_filename: null,
      project_release_url: "",
      project_is_created_or_updated: false,
    }
  );


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
    if (props.mode === "update")
    {      
      getProject(id);
    }
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
    setRemoveImagesPossibility(true);
    if (project.project_is_file_format === true) //seulement si c'est un release de type file
    {
      setRemoveReleaseFilePossibility(true); //Enclenche la possibilité de supprimer le fichier côté serveur
    }
    setDataFound(undefined); //Reset pour éviter que ca ne relance cette fonction à chaque modif du state
  }
      

// ------------------------- Evenementiel (modification du state en fonction des inputs) -------------------------

  // Event de modifications du formulaires
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
    setProject(prevState => {
      return { ...prevState, project_images_updated : true }
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

// ----------------------------------- Submit du form et Reponse du server ----------------------
  const saveProject = (e) => {

    // instanciation d'un objet FormData pour envoyer les données à Express
    // --> "content" : "multipart/form-data"
    let data = new FormData();
    data.append('project_name', project.project_name);
    data.append('project_technologies', project.project_technologies);
    data.append('project_description', project.project_description);
    data.append('project_thumbnail_filename', project.project_thumbnail_filename);
    // images files
    data.append('project_images_updated', project.project_images_updated);

    //Si c'est les données renvoyées par le serveur ou qu'on est en POST
    if ( project.project_images_updated === true || props.mode === "create" ) 
    {
      for (let i = 0; i < project.project_images.length; i++) {
        data.append(`project_images`, project.project_images[i]);
      }    
    }
    data.append('project_is_file_format', project.project_is_file_format);
    data.append('project_release_filename', project.project_release_filename);
    data.append('project_release_url', project.project_release_url);


    if ( props.mode === "create") { //mode create
      ProjectDataService.create(data)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setProject(prevState => {
            return { ...prevState, project_is_created_or_updated : true }
          });
        }
      })
      .catch(e => {
        if (e.response.status === 422) {
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
      });
    }
    else { //UPDATE
      ProjectDataService.update(id,data)
        .then(response => {
          setProject(prevState => {
            return { ...prevState, project_is_created_or_updated : true }
          });
        })
        .catch(e => {
          if (e.response.status === 422) {
            // Reset des states pour éviter que certains messages persistent même apres correction
            setNameValidation({isValid : true, message : ""})
            setTechnologiesValidation({isValid : true, message : ""})
            setDescriptionValidation({isValid : true, message : ""})
            setThumbnailValidation({isValid : true, message : ""})
            setReleaseFileValidation({isValid : true, message : ""})
            setReleaseUrlValidation({isValid : true, message : ""}) 
            // Gestion des erreurs et ajout au state error
            e.response.data.errors.forEach(error => {
              switch (error.param) {
                case "project_name":
                  setNameValidation({isValid : false, message : error.msg})
                  break;
                case "project_technologies":
                  setTechnologiesValidation({isValid : false, message : error.msg})
                  break;
                case "project_description":
                  setDescriptionValidation({isValid : false, message : error.msg})
                  break;
                case "project_thumbnail_filename":
                  setThumbnailValidation({isValid : false, message : error.msg})
                  break;
                case "project_images":
                  setImagesValidation({isValid : false, message : error.msg});
                  break;
                case "project_release_filename":
                  setReleaseFileValidation({isValid : false, message : error.msg})
                  break;
                case "project_release_url":
                  setReleaseUrlValidation({isValid : false, message : error.msg})
                  break;
              }
            });
           
          }
          else {
            //SWAL Server error
          }  
        });
    }
  }




// -------------------------------- JSX -----------------------------------------
  return (
    <>
      <App></App>
      <div className="wrapper-form">
        <div className="box-form">
       
          {/*----------------------------------------- Name Field ------------------------------------------*/}
          <div className="item-form">
            <div className="label-form">Project Name</div>
            <input 
              type="text"
              className="textFields-form small" 
              id="project_name" 
              value={project.project_name} 
              onChange={onChangeProject_name} 
              name="project_name"
            />
            { nameValidation.isValid === false ?
              <div className="errorMessage">{nameValidation.message}</div>
            : null }
          </div> 

        {/*----------------------------------------- Technologies Field ----------------------------------------*/}
          <div className="item-form">
            <div className="label-form">Source and target technologies</div>
            <input 
              type="text"
              className="textFields-form" 
              id="project_technologies"
              value={project.project_technologies} 
              onChange={onChangeProject_technologies} 
              name="project_technologies"
            /> 
            { technologiesValidation.isValid === false ?
              <div className="errorMessage">{technologiesValidation.message}</div>
            : null }
          </div>

        {/*----------------------------------------- Description Field ----------------------------------------*/}
          <div className="item-form">
            <div className="label-form">Description</div>
            <textarea
              className="textArea-form" 
              id="project_description"
              value={project.project_description} 
              onChange={onChangeProject_description} 
              name="project_description">
            </textarea> 
            { descriptionValidation.isValid === false ?
              <div className="errorMessage">{descriptionValidation.message}</div>
            : null }
          </div>


        {/*----------------------------------------- Thumbnail Field ----------------------------------------*/}
          { removeThumbnailPossibility === false ?
          <div className="item-form">
            <div className="label-form">Thumbnail</div>
            <input 
              type='file' 
              name='project_thumbnail_filename' 
              className='files-form'
              onChange={onChangeProject_thumbnail_filename}>
            </input>
            { thumbnailValidation.isValid === false ?
              <div className="errorMessage">{thumbnailValidation.message}</div>
            : null 
            }
          </div>
     
          : 
          <div className="item-form">
            <div className="label-form">Thumbnail</div>
            <div className="file-box">
              <img src={deleteLogo} className="icon-delete" onClick={onResetProject_thumbnail_filename}></img>
              <div className="file-name">{project.project_thumbnail_filename}</div>
            </div>
          </div> 
          }
          
        {/*--------------------------------------------- Images Field--------------------------------------*/}
          { removeImagesPossibility === false ?
          <div className="item-form">
            <div className="label-form">Images</div>
            <input type='file' multiple name='project_images' onChange={onChangeProject_images} className='files-form'></input>
            { imagesValidation.isValid === false ?
              <div className="errorMessage">{imagesValidation.message}</div>
            : null 
            }
          </div> 

          : 
          <div className="item-form">
            <div className="label-form">Images</div>
            <div className="file-box">
              <img src={deleteLogo} className="icon-delete" onClick={onResetProject_images}></img>
              <div className="file-name">
                { project.project_images.map((image) => (
                  <div key={image.project_image_id}>{image.project_image_filename}</div>             
                ))}
              </div>
            </div>
          </div> 
          }

          {/* {project.project_images} */}


        {/*--------------------------------------- Format Select------------------------------------------------*/}
          <div className="item-form">
            <div className="label-form">Format</div>
            <select 
              className='FormatChoice_JS'
              id="project_is_file_format"  
              value={project.project_is_file_format} 
              onChange={onChangeProject_is_file_format} 
              name="project_is_file_format">
                <option value="true">File</option>
                <option value="false">Link</option>
            </select>
          </div>

        

        {/*----------------------------------------- Release Field (URL OR FILE)----------------------------------------------*/}
          { project.project_is_file_format === true ?

            <>
            { removeReleaseFilePossibility === false ?
    
              <div className="item-form fileInput_JS">
                <div className="label-form">Fichier</div>  
                <input 
                  type='file' 
                  name='project_release_filename' 
                  className='files-form'
                  onChange={onChangeProject_release_filename}
                ></input>
                { releaseFileValidation.isValid === false ?
                  <div className="errorMessage">{releaseFileValidation.message}</div>
                : null 
                }
              </div>  

            : 
              
              <div className="item-form">
                <div className="label-form">Fichier</div>
                <div className="file-box">
                  <img src={deleteLogo} className="icon-delete" onClick={onResetProject_release_filename}></img>
                  <div className="file-name">{project.project_release_filename}</div>
                </div>
              </div> 
            }
            </>

          :
            <div className="item-form urlInput_JS">
              <div className="label-form">Link</div>
              <input 
                type="text"
                className="textFields-form" 
                id="project_release_url"
                value={project.project_release_url} 
                onChange={onChangeProject_release_url} 
                name="project_release_url"
              />
              { releaseUrlValidation.isValid === false ?
                <div className="errorMessage">{releaseUrlValidation.message}</div>
              : null } 
            </div>

          } 

        {/*----------------------------------------- Button Submit----------------------------------------*/}
          { props.mode === "create" ?
          <button className="item-form button-form" onClick={saveProject}>Create Project</button>
          :
          <button className="item-form button-form" onClick={saveProject}>Update Project</button>
          } 
 
        </div>
    </div>
  </>
  );
}