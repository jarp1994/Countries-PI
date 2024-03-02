const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    tId:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flagImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
    continent: {
        type: DataTypes.STRING,
        allowNull: false
      },
    capital: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subregion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    population: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
};