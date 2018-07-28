module.exports = function(sequelize, DataTypes) {
  var godinez = sequelize.define("godinez", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return godinez;
};
