const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
       //--> alllowNull: false --> no permite que este vacio
    },
    flag: {
        type: DataTypes.STRING,
        
      },
    coatOfArms: {
        type: DataTypes.STRING,
      },
    continent: {
        type: DataTypes.STRING,
        
      },
    capital: {
        type: DataTypes.STRING,
        
    },
    subregion: {
        type: DataTypes.STRING,
        
    },
    area: {
        type: DataTypes.INTEGER,
        
    },
    population: {
        type: DataTypes.INTEGER,
        
    },
    maps: {
      type: DataTypes.STRING,
      
    },
    },
    { timestamps: false } //---> indicar que no se deben incluir automáticamente las marcas de tiempo createdAt y updatedAt en las filas de la tabla correspondiente
  )
}