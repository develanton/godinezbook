module.exports = function (sequelize, DataTypes) {
  var tanda = sequelize.define("tanda", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    organizadorId: DataTypes.INTEGER,
    organizadorNombre: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
    inscritos: DataTypes.INTEGER,
    monto: DataTypes.INTEGER,
    llena: DataTypes.STRING,
    activa: DataTypes.STRING,
    finalizada: DataTypes.STRING
  });
  return tanda;
};
