module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    nacimiento: DataTypes.DATE,
  });
  return users;
};
