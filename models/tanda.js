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
    up12: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up13: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up14: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up21: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up23: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up24: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up31: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up32: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up34: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up41: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up42: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    up43: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    pag1: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    pag2: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    pag3: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },
    pag4: {
      type: DataTypes.STRING,
      defaultValue: "danger"
    },  });
  return tanda;
};
