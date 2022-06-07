module.exports = app => {
  const Project = require("../controllers/project.controller.js");
  const { projectValidation, processFiles, verifyToken } = require("../middleware");
  var router = require("express").Router();

// Rajouter middleware verifyToken sur tous les post, put et delete !

  // Create a new Project
  router.post("/", verifyToken, processFiles, projectValidation , Project.create); 
  
  // Retrieve all Projects
  router.get("/", Project.findAll);
  
  // Retrieve a single Project with id
  router.get("/:id", Project.findOne);

  // Update a Project with id
  router.put("/:id", verifyToken, processFiles, projectValidation , Project.update);

  // Delete a Project with id
  router.delete("/:id", verifyToken, Project.delete);

  // Delete all Project
  router.delete("/", verifyToken, Project.deleteAll);

  app.use('/api/Projects', router);
};