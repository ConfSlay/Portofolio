module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_username: {
      type: Sequelize.STRING
    },
    user_password: {
      type: Sequelize.STRING
    }
  });
  return User;
};