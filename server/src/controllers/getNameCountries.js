const {Country} = require('../db');

const getNameCountry = async (req,res) => {
    try {
        const name = req.query.name;
        // console.log("nombreeeeeeeeeeeee")
        const lowerCaseName= name ? name.toLowerCase() : null;
        const trimName = lowerCaseName ? lowerCaseName.trim() : null;
        const apiName = trimName ? trimName.charAt(0).toUpperCase() + trimName.slice(1): null;
        // console.log("Nombre del país normalizado: ", apiName);
        let countryByName = null;
        const countryinDb = await Country.findOne({
          where: { name: apiName },
          attributes: [
            "id",
            "name",
            "flag",
            "coatOfArms",
            "continent",
            "capital",
            "subregion",
            "area",
            "population",
            "maps",
          ],
        });
            if(countryinDb){
                // console.log("entramos al controlador de name");
                countryByName = {
                    id: countryinDb.id,
                    name: countryinDb.name,
                    flag: countryinDb.image,
                    coatOfArms: countryinDb.coatOfArms,
                    continent: countryinDb.continents,
                    capital: countryinDb.capital,
                    subregion: countryinDb.subregion,
                    area: countryinDb.area,
                    population: countryinDb.population,
                    maps: countryinDb.maps,
                };
            }
        if(countryByName){
            return res.status(200).json(countryByName)
        } else{
            // console.log("No se encontró el país en la base de datos");
            return res.status(404).json({message: "No se encontró un pais con ese nombre"})
        }
    } catch (error) {
        // console.error("Error al buscar el país:", error);
        return res.status(500).json({ message: "Error al buscar el país" })
    }
};

module.exports = getNameCountry