require('dotenv').config();//pour utiliser le .env
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

// Verif de la validité du token
exports.verifyToken = (req, res, next) => {
  let token = req.session.token;
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.SESSION_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};


