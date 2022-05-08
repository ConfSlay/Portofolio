// BDD
const db = require("../models");
const Projects = db.Project; 
const ProjectImage = db.ProjectImage;
const Op = db.Sequelize.Op; //database open
// File System
const fs = require('fs');
const path = require('path');
const directory = './uploads';


//----------------------------------------- Create and Save a new Project-----------------------------------------------------------
exports.create = (req, res) => {

  // Create a Project
  const myNewProject = {
    project_name : req.body.project_name,
    project_technologies : req.body.project_technologies,
    project_description : req.body.project_description,
    project_thumbnail_filename : req.files["project_thumbnail_filename"][0].filename,
    project_is_file_format : req.body.project_is_file_format,
    project_release_filename : req.body.project_is_file_format === "true" ? //file needed or not     
      req.files["project_release_filename"][0].filename
      : null, 
    project_release_url : req.body.project_is_file_format === "false" ? req.body.project_release_url : ""
  };


  //Save Project in the database
  Projects.create(myNewProject)
    .then(data => {
      //Project Images
      req.files["project_images"].forEach(  function(image){
        ProjectImage.create({
          project_image_filename : image.filename,
          //ce nom horrible est généré par sequelize, ca fait chier, j'avais pas 3h à perdre pour changer ça
          projectProjectId  : data.project_id 
        })
        .catch((err) => {
          console.log(">> Error while creating image: ", err);
        });
      });
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          /*err.message ||*/ "Some error occurred while creating the Project"
      });
    });
};



//--------------------------------------- Retrieve all Projects from the database.-----------------------------------------------------
exports.findAll = (req, res) => {
  Projects.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          /*err.message ||*/ "Some error occurred while retrieving Projects."
      });
    });
};



//----------------------------------------- Find a single Project with an id--------------------------------------------------------------
exports.findOne = (req, res) => {
  const id = req.params.id;
  Projects.findByPk(id, { include: [ProjectImage] })
    .then(data => {
      if (data) {
        res.send(data);

      } else {
        res.status(404).send({
          message: `Cannot find Project with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });
};

//-------------------------------------------Update a Project with id in the request------------------------------------------------------
exports.update = (req, res) => {

  const id = req.params.id;

  let myOldProject;
  // Get object data before delete
  //Obliger de tout emboiter vu que c'est bourré d'asynchrone
  //Aurait pu etre fait autrement et plus propre si je maitrisais mieux les concepts de async function et await
  Projects.findByPk(id, { include: [ProjectImage] })
    .then(data => {
      //Recup les anciennes données
      myOldProject = data.toJSON();
      // Mise en place des nouvelles données et suppression des Fichiers
      const myNewProject = {
        project_name : req.body.project_name,
        project_technologies : req.body.project_technologies,
        project_description : req.body.project_description,
        project_thumbnail_filename :  "",
        project_is_file_format : req.body.project_is_file_format,
        project_release_filename : null, 
        project_release_url : req.body.project_is_file_format === "false" ? req.body.project_release_url : ""
      };
      //------------------------ Thumbnail file ---------------------
      if (req.files["project_thumbnail_filename"] === undefined)
      {
        myNewProject.project_thumbnail_filename = req.body.project_thumbnail_filename;
      }
      else
      {
        myNewProject.project_thumbnail_filename = req.files["project_thumbnail_filename"][0].filename;
        //suppression ancien fichier storage
        let file;
        file = myOldProject.project_thumbnail_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }

      //------------------------ update Images Files ? ---------------------------------
      if (req.body.project_images_updated === "true") //update des images
      { 
        
        myOldProject.project_images.forEach(image => {
          //suppression anciens images files dans storage
          let file;
          file = image.project_image_filename;
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
          //suppression anciens images in db
          ProjectImage.destroy({where: { projectProjectId: id} })
            .catch(err => { //Catch Project.Update
              res.status(500).send({
                message: "Error updating Project with id=" + id
              });
            });
        })

        //ajout des nouvelles images en bdd
        req.files["project_images"].forEach(  function(image){
          ProjectImage.create({
            project_image_filename : image.filename,
            //ce nom horrible est généré par sequelize, ca fait chier, j'avais pas 3h à perdre pour changer ça
            projectProjectId  : data.project_id 
          })
          .catch((err) => {
            console.log(">> Error while creating image: ", err);
          });
        });

      }


      //---------------------- Update RELEASE file ?----------------------------------
      // URL release
      if (req.files["project_release_filename"] === undefined && req.body.project_is_file_format === "false")
      {
        // passage de file release à URL release
        if (myOldProject.project_is_file_format === true) 
        {
          //suppression ancien fichier storage
          let file;
          file = myOldProject.project_release_filename;
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      }
      //pas de modifs
      else if (req.files["project_release_filename"] === undefined && req.body.project_is_file_format === "true")
      {
        myNewProject.project_release_filename = req.body.project_release_filename;
      }
      // modif du fichier
      else
      {
        myNewProject.project_release_filename = req.files["project_release_filename"][0].filename;
        //suppression ancien fichier storage (si c'était pas un Release URL avant)
        if (myOldProject.project_is_file_format === true)
        {
          let file;
          file = myOldProject.project_release_filename;
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      }   
      //-------------------------- Update the Project------------------------------
      Projects.update(myNewProject, {
        where: { project_id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Project was updated successfully."
            });
          }
        })
        .catch(err => { //Catch Project.Update
          res.status(500).send({
            message: "Error updating Project with id=" + id
          });
        });
    })
    .catch(err => { //Catch Project.FindByPK
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });
};

//----------------------------------- Delete a Project with the specified id in the request--------------------------------------
exports.delete = (req, res) => {
  
  const id = req.params.id;

  let myOldProject;
  // Get object data before delete
  //Obliger de tout emboiter vu que c'est bourré d'asynchrone
  //Aurait pu etre fait autrement et plus propre si je maitrisais mieux les concepts de async function et await
  // Et si sequelize était mieux foutu + meilleur documentation (c'est du foutage de geulle leur doc)
  Projects.findByPk(id, { include: [ProjectImage] })
    .then(data => {
      myOldProject = data.toJSON();
      //Suppression Fichiers
      let file;
      //Thumbnail 
      file = myOldProject.project_thumbnail_filename;
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
      //Project Images
      myOldProject.project_images.forEach( function(image) {
        //Delete file
        file = image.project_image_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      });
      //Release if true
      if (myOldProject.project_is_file_format === true) {
        file = myOldProject.project_release_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
      //Suppression BDD
      // Suprresion des Images
      ProjectImage.destroy({where: { projectProjectId: id} })
        .then(function() {
          //Suppression du projet
          Projects.destroy({
            where: { project_id: id }
          })
            .then(num => {
                res.send({
                  message: "Project was deleted successfully!"
                });
            })
            .catch(err => { //Catch Project.Delete
              res.status(500).send({
                message: "Could not delete Project with id=" + id
              });
            });
        })
        .catch(err => { //Catch PorjectImage.delete
          message: "Could not delete Project with id=" + id
        });
    })
    .catch(err => { //Catch Project.FindByPK
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

//--------------------------------------------------- Delete ALL Project -> DEV--------------------------------------------------
exports.deleteAll = async (req, res) => {

  //Suppression des fichiers dans le folder uploads.
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });

  try {

    //Suppression des Project_images en BDD
    const destroyImages = await ProjectImage.destroy({
        where: {},
        truncate: false
      });

    if (destroyImages < 1) {
      res.status(500).send({
        message: "Could not delete Projects Images"
      });
    }

    const destroyProjects = Projects.destroy({
        where: {},
        truncate: false
      });

    if (destroyProjects < 1) {
      res.status(500).send({
        message: "Could not delete Projects"
      });
    }

  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
