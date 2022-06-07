// .env
require('dotenv').config();//pour utiliser le .env
const port = process.env.PORT; //cherche dans les variables d'environnements

//CORS
const cors = require("cors");
var corsOptions = {
  origin: process.env.DOMAIN_CORS // autorise les requete provenant du domaine défini dans .env
};

//Express
const path = require("path");
const express = require("express");
const uuid = require('uuid').v4;
const cookieSession = require('cookie-session')


const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// SESSION
app.use(
  cookieSession({
    name: "admin-session",
    secret: process.env.SESSION_SECRET_KEY, // should use as secret environment variable
    httpOnly: true //indicate that the cookie is only to be sent over HTTP(S), and not made available to client JavaScript.
  })
);


// STATIC FILES
app.use(express.static(path.join(__dirname, "..", "build"))); // =  FROM __dirname TO ../build
app.use(express.static("public"));
app.use("/uploads",express.static('uploads')); //uploads folder is now accessible to http-get request suffixed by /uploads

// SEQUELIZE
const db = require("./src/models");
db.sequelize.sync(); //Synchro avec les modèles

/*  db.sequelize.sync() - This creates the TABLE if it doesn't exist (and does nothing if it already exists)
    db.sequelize.sync({ force: true }) - This creates the TABLE, dropping it first if it already existed
    db.sequelize.sync({ alter: true }) - This checks what is the current state of the TABLE in the database 
    (which columns it has, what are their data types, etc), and then performs the necessary changes in the TABLE to make it match the model. */

// Ici on envoie l'app React (voir inclure toutes les routes React non API ici aussi)
app.get(/^((?!\/api\/).)*$/, (req, res) => {
  res.sendFile(path.join(__dirname,"..", "build", "index.html"));
});


// Routes API
require("./src/routes/project.routes")(app); 
require("./src/routes/auth.routes")(app);
require("./src/routes/contact.routes")(app);


// Set Port, Listen for Requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});