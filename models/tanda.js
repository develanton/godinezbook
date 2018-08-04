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
    user1: DataTypes.STRING,
    user1id: DataTypes.STRING,
    user2: DataTypes.STRING,
    user2id: DataTypes.STRING,
    user3: DataTypes.STRING,
    user3id: DataTypes.STRING,
    user4: DataTypes.STRING,
    user4id: DataTypes.STRING,
    up12: DataTypes.STRING,
    up13: DataTypes.STRING,
    up14: DataTypes.STRING,
    up21: DataTypes.STRING,
    up23: DataTypes.STRING,
    up24: DataTypes.STRING,
    up31: DataTypes.STRING,
    up32: DataTypes.STRING,
    up34: DataTypes.STRING,
    up41: DataTypes.STRING,
    up42: DataTypes.STRING,
    up43: DataTypes.STRING,
    pag1: DataTypes.STRING,
    pag2: DataTypes.STRING,
    pag3: DataTypes.STRING,
    pag4: DataTypes.STRING
  });
  return tanda;
};
