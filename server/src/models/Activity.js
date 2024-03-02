const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo 2
  sequelize.define("activity",{
    Id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false
      },
    time: {
        type: DataTypes.STRING,
        allowNull: false
      },
    season: {
        type: DataTypes.STRING,
        allowNull: false
    }
  })
};