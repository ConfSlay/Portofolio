const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Exports
// User
db.User = require("./user.model.js")(sequelize, Sequelize);
//Project & ProjectImage
db.Project = require("./project.model.js")(sequelize, Sequelize);
db.ProjectImage = require("./project_image.model.js")(sequelize, Sequelize);
db.Project.hasMany(db.ProjectImage);
db.ProjectImage.belongsTo(db.Project);
module.exports = db;
