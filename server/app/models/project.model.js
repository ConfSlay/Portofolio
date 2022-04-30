module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project" /*nom de la table*/, {
    project_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    project_name: {
      type: Sequelize.STRING
    },
    project_technologies: {
      type: Sequelize.STRING
    },
    project_description: {
      type: Sequelize.TEXT  
    },
    project_thumbnail_filename: {
      type: Sequelize.STRING
    },
    project_is_file_format: {
      type: Sequelize.BOOLEAN
    },
    project_release_filename: {
      type: Sequelize.STRING
    },
    project_release_url: {
      type: Sequelize.STRING
    }
  });
  return Project;
};


