module.exports = (sequelize, Sequelize) => {
  const ProjectImage = sequelize.define("project_image" /*nom de la table*/, {
    project_image_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    project_image_filename: {
      type: Sequelize.STRING
    }
  });
  return ProjectImage;
};