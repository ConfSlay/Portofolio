const db = require("../models");
require('dotenv').config();//pour utiliser le .env
const User = db.User;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = async (req, res) => {
  try {

  	// Verif Identifiant
    const user = await User.findOne({
      where: {
        user_username: req.body.username,
      },
    });


    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    // Verif Password
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.user_password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }

    //Signature du token que l'on va envoyer
    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET_KEY, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;
    return res.status(200).send({
      id: user.id,
      username: user.user_username,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null; // Deletes the cookie
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};
