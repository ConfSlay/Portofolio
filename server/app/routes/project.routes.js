module.exports = app => {
  const Project = require("../controllers/project.controller.js");
  const { projectValidation, processFiles } = require("../middleware");
  var router = require("express").Router();


  // Create a new Project
  router.post("/", processFiles, projectValidation , Project.create); 
  
  // Retrieve all Projects
  router.get("/", Project.findAll);
  
  // Retrieve a single Project with id
  router.get("/:id", Project.findOne);

  // Update a Project with id
  router.put("/:id", processFiles, projectValidation , Project.update);

  // Delete a Project with id
  router.delete("/:id", Project.delete);

  // Delete all Project
  router.delete("/", Project.deleteAll);

  app.use('/api/Projects', router);
};