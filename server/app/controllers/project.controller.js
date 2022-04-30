// BDD
const db = require("../models");
const Projects = db.Project; 
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
    project_thumbnail_filename : 
      //req.files["project_thumbnail_filename"][0].destination + 
      req.files["project_thumbnail_filename"][0].filename,
    project_is_file_format : req.body.project_is_file_format,
    project_release_filename : req.body.project_is_file_format === "true" ? //file needed or not     
      //req.files["project_release_filename"][0].destination + 
      req.files["project_release_filename"][0].filename
      : null, 
    project_release_url : req.body.project_is_file_format === "false" ? req.body.project_release_url : ""
  };


  //Save Project in the database
  Projects.create(myNewProject)
    .then(data => {
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
  Projects.findByPk(id)
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
  Projects.findByPk(id)
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
      // Thumbnail file
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

      // Release file
      // passage de file release à URL release
      if (req.files["project_release_filename"] === undefined && req.body.project_is_file_format === "false")
      {
        //suppression ancien fichier storage
        let file;
        file = myOldProject.project_release_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
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
      // Update a Project
      Projects.update(myNewProject, {
        where: { project_id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Project was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Project with id=${id}. Maybe Projects was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
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
  Projects.findByPk(id)
    .then(data => {
      myOldProject = data.toJSON();
      //Suppression Fichiers
      let file;
      //Thumbnail 
      file = myOldProject.project_thumbnail_filename;
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
      //Release if true
      if (myOldProject.project_is_file_format === true) {
        file = myOldProject.project_release_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
      //Suppression BDD
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
    .catch(err => { //Catch Project.FindByPK
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

//--------------------------------------------------- Delete ALL Project -> DEV--------------------------------------------------
exports.deleteAll = (req, res) => {

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });

  //Suppression BDD
  Projects.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {   
      res.send({
        message: nums + ' projects were deleted successfully!'
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Project with id=" + id
      });
    });
};
