/*const db = require("../models");
const secret = process.env.SECRET_KEY;
const User = db.User;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user_username: req.body.user_username,
    user_password: bcrypt.hashSync(req.body.user_password, 8)
  })
    .then(user => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      user_username: req.body.user_username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Invalid" }); // Affaire de sécurité de ne laisser aucun indice à l'assaillant
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.user_password,
        user.user_password
      );
      if (!passwordIsValid) {
        return res.status(404).send({ // Affaire de sécurité de ne laisser aucun indice à l'assaillant (réponse identique à !user)
          message: "Invalid"
        });
      }
      var token = jwt.sign({ user_username: user.user_username }, secret, {
        expiresIn: 86400 // 24 hours
      });
      // Reponse si tout va bien
      res.status(200).send({
        user_username: user.user_username,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: "Server error"  }); //err.message
    });
};

exports.signout = (req, res) => { //TO DO
  User.findOne({
    where: {
      user_username: req.body.user_username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Invalid" }); // Affaire de sécurité de ne laisser aucun indice à l'assaillant
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.user_password,
        user.user_password
      );
      if (!passwordIsValid) {
        return res.status(404).send({ // Affaire de sécurité de ne laisser aucun indice à l'assaillant (réponse identique à !user)
          message: "Invalid"
        });
      }
      var token = jwt.sign({ user_username: user.user_username }, secret, {
        expiresIn: 86400 // 24 hours
      });
      // Reponse si tout va bien
      res.status(200).send({
        user_username: user.user_username,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: "Server error"  }); //err.message
    });
};
