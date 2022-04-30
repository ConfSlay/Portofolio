module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_username: {
      type: Sequelize.STRING
    },
    user_password: {
      type: Sequelize.STRING
    }
  });
  return User;
};