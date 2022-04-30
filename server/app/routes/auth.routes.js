/*const controller = require("../controllers/auth.controller");
module.exports = function(app) {
  const { authValidation } = require("../middleware");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/auth/signup", authValidation ,controller.signup);
  app.post("/api/auth/signin", authValidation , controller.signin);
  //Signout
};
