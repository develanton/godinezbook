module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define("posts", {
    texts: DataTypes.STRING,
    descriptions: DataTypes.TEXT
  });

  return posts;
};
