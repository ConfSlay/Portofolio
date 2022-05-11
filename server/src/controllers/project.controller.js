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
exports.create = async (req, res) => {

  try {

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
    const dataProject = await Projects.create(myNewProject);

    if(!dataProject) {
      return res.status(500).send({message: "an error has occurred while creating the Project"});
    }
    
    //Project Images
    req.files["project_images"].forEach( async function(image){
      try {
        const dataProjectImages = await ProjectImage.create({
          project_image_filename : image.filename,            
          projectProjectId  : dataProject.project_id //ce nom horrible est généré par sequelize, ca fait chier, j'avais pas 3h à perdre pour changer ça
        });
      } catch (err) {
        return res.status(500).send("Error while saving images");
      }
    });

    return res.status(200).send(dataProject);

  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};



//--------------------------------------- Retrieve all Projects from the database.-----------------------------------------------------
exports.findAll = async (req, res) => {

  try {

    const data = await Projects.findAll();
    return res.status(200).send(data);

  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};



//----------------------------------------- Find a single Project with an id--------------------------------------------------------------
exports.findOne = async (req, res) => {

  try {

      const id = req.params.id;
      const data = await Projects.findByPk(id, { include: [ProjectImage] });

      if(!data) {
        return res.status(404).send({message: `Cannot find Project with id=${id}.`});
      }

      return res.status(200).send(data);

  } catch {
    return res.status(500).send("Internal server error");
  }
};

//-------------------------------------------Update a Project with id in the request------------------------------------------------------
exports.update = async (req, res) => {

  try {

    const id = req.params.id;

    // Get object data before update
    const dataProject = await  Projects.findByPk(id, { include: [ProjectImage] });

    // if project doesnt exist
    if(!dataProject) {
      return res.status(404).send({ message: "Error retrieving Project with id=" + id })
    }

    // just for code readability
    let myOldProject = dataProject.toJSON();

    const myNewProject = {
      project_name : req.body.project_name,
      project_technologies : req.body.project_technologies,
      project_description : req.body.project_description,
      project_thumbnail_filename :  "",
      project_is_file_format : req.body.project_is_file_format,
      project_release_filename : null, 
      project_release_url : req.body.project_is_file_format === "false" ? req.body.project_release_url : ""
    };

    //------- update Thumbnail file ? -------
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
      fs.unlink(path.join(directory, file), err => {if (err) throw err; });
    }

    //-------- update Images Files ? -------------
    if (req.body.project_images_updated === "true") //update des images
    {         
       myOldProject.project_images.forEach(async image => {
        //suppression anciens images files dans storage
        let file;
        file = image.project_image_filename;
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
        //suppression anciens images in db
        const destroyImages = await ProjectImage.destroy({where: { projectProjectId: id} });       
      });

      //ajout des nouvelles images en bdd
      req.files["project_images"].forEach( async function(image){
        const createImages = await ProjectImage.create({
          project_image_filename : image.filename,
          //ce nom horrible est généré par sequelize, ca fait chier, j'avais pas 3h à perdre pour changer ça
          projectProjectId  : myOldProject.project_id 
        });
      });
    }

    //---- Update RELEASE file ?--------
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

    //--------- Update the Project------------
    const updateProject = await Projects.update(myNewProject, {where: { project_id: id }});

    return res.status(200).send({message: "Project was updated successfully."});

  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};


//----------------------------------- Delete a Project with the specified id in the request--------------------------------------
exports.delete = async (req, res) => {

  try {

    const id = req.params.id;

    // Get object data before delete
    const dataProject = await Projects.findByPk(id, { include: [ProjectImage] } ); //

    // if project doesnt exist
    if(!dataProject) {
      return res.status(404).send({ message: "Error retrieving Project with id=" + id })
    }

    // just for code readability
    let myOldProject = dataProject.toJSON();

    //Suppression Fichiers
    let file;

    //Thumbnail file
    file = myOldProject.project_thumbnail_filename;
    fs.unlink(path.join(directory, file), err => {if (err) throw err;});

    

    //Project Images files
    myOldProject.project_images.forEach( async function(image) {
      //Delete file
      file = image.project_image_filename;
      fs.unlink(path.join(directory, file), err => {if (err) throw err;});
    });

    //Release if true
    if (myOldProject.project_is_file_format === true) {
      file = myOldProject.project_release_filename;
      fs.unlink(path.join(directory, file), err => {if (err) throw err;});

    }
      
    //-----Suppression BDD------
    const destroyImages = await ProjectImage.destroy({where: { projectProjectId: id} });

    const destroyProject = await Projects.destroy({where: { project_id: id }});

    return res.status(200).send("Project was deleted successfully!");

  } catch (err) {
    return res.status(500).send(err);
  }
};  

//--------------------------------------------------- Delete ALL Project -> DEV--------------------------------------------------
exports.deleteAll = async (req, res) => {

  try {

    //Suppression des fichiers dans le folder uploads.
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {if (err) throw err;});
      }
    });
  
    //Suppression des Project_images en BDD
    const destroyImages = await ProjectImage.destroy({
        where: {},
        truncate: false
      });

    //Suppression des Projects
    const destroyProjects = await Projects.destroy({
        where: {},
        truncate: false
      });

    return res.status(200).send("Projects deleted");

  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};
