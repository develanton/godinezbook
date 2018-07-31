module.exports = function(sequelize, DataTypes) {
  var godinez = sequelize.define("posts", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return godinez;
};
