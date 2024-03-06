const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo 2
  sequelize.define("Activity",{
    id:{
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
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false
      },
    duration: {
        type: DataTypes.ENUM("1 hour","2 hours","3 hours","4 hours", "5 hours"),
        allowNull: true
      },
    season: {
        type: DataTypes.ENUM("summer","autumn","winter","spring"),
        allowNull: false
      },
    },
    { timestamps: false } //---> indicar que no se deben incluir automáticamente las marcas de tiempo createdAt y updatedAt en las filas de la tabla correspondiente
    
  )
}
