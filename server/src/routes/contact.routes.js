module.exports = app => {
  const Contact = require("../controllers/contact.controller.js");
  const { contactValidation } = require("../middleware");
  var router = require("express").Router();


  // send a new Contact mail
  router.post("/",contactValidation, Contact.Contact); 
  
  app.use('/api/Contact', router);
};