const { check, validationResult, matchedData } = require('express-validator'); //VALIDATION

exports.projectValidation = [
    //---------------Text Fields Validation----------------------   
    //pas besoin de (req,res,next) pcq ce sont déjà des middleware (qu'on appelle dans notre middleware)
    check('project_name', 'Name is required').not().isEmpty(),
    check('project_technologies', 'Technologies are required').not().isEmpty(),
    check('project_description', 'Description is required').not().isEmpty(),
    check('project_release_url', 'Project url is required').if(check('project_is_file_format').equals('false')).not().isEmpty(),

  //---------------Files Validation----------------------   
  (req, res, next) => {
    const e = validationResult(req);
    let errors = new Array();
    errors = e.array();//Extrait le tableau de l'objet avec sa propre méthode dans un autre tableau pour pouvoir array.push()

    //---------Thumbnail File Validation-------------
    // Si pas de fichier, et pas de nom de fichier, alors c'est une erreur. 
    // Create = fichier
    // Upload = fichier ou nom de fichier si 0 modifs
    if(req.files["project_thumbnail_filename"] === undefined && req.body.project_thumbnail_filename === "null"){
      // Format similaire à express-validator comme ça c'est homogène pour le front React
      errors.push({"param" : "project_thumbnail_filename", "msg" : "No file selected"});
    }

    //---------Release File Validation-------------
    const needed = req.body.project_is_file_format; //file needed or not
    // Si pas de fichier, et pas de nom de fichier, alors c'est une erreur. 
    // Create = fichier
    // Upload = fichier ou nom de fichier si 0 modifs
    if( needed === "true" && req.files["project_release_filename"] === undefined && req.body.project_release_filename === "null"){
      // Format similaire à express-validator comme ça c'est homogène pour le front React
      errors.push({"param" : "project_release_filename", "msg" : "No file selected"});
    }

    if (errors[0] !== undefined) {
      return res.status(422).json({errors: errors});
    }

    next(); //convention de nommage, histoire de dire qu'on appelle la fonction suivante dans l’application, 
  },
]
 
exports.authValidation = [
      //pas besoin de (req,res,next) pcq ce sont déjà des middleware (qu'on appelle dans notre middleware)
     check('user_username', "Identifier is required").not().isEmpty(),
     check('user_password', 'Password must be 6 or more characters').isLength({ min: 6 }), 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next(); //convention de nommage, histoire de dire qu'on appelle la fonction suivante dans l’application
  },
]

exports.contactValidation = [
    //pas besoin de (req,res,next) pcq ce sont déjà des middleware (qu'on appelle dans notre middleware)
     check('contact_email', "Valid email is required").isEmail(),
     check('contact_message', 'Message must be 20 or more characters').isLength({ min: 20 }), 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next(); //convention de nommage, histoire de dire qu'on appelle la fonction suivant dans l’application
  },
]
 