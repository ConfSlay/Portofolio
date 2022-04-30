//-------Multipart/form-data management------------
const multer  = require('multer'); //Pour multipart/form-data
const uuid = require('uuid').v4;



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
  	// pour éviter les doublons avec uuid 
    const uniqueId = uuid();    
    cb(null,  uniqueId+"_"+file.originalname );

  }
});

const upload = multer({ storage: storage });

const manyUpload = upload.fields([{name: "project_thumbnail_filename", maxCount: 1},{ name: "project_release_filename", maxCount: 1 }]);

exports.processFiles = [

//pas besoin de (req,res,next) pcq c'est déjà un middleware (qu'on appelle dans notre middleware)
manyUpload,

// res.locals.filename // transmet les nouveaux noms de fichiers 
	(req, res, next) => {
		next();	
	}
]