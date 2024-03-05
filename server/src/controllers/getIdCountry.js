const {Country, Activity} = require('../db');

// TRAE EL DETALLE DE UN PAIS POR ID EN ESPECIFICO

const getIdCountry = async(req, res) => {
    try {
        const {idPais} = req.params;
        const id2 = idPais.toUpperCase();
        if (idPais){
            const countryIdDb = await Country.findOne({
              where: { id: id2 },
              include: [{ model: Activity }],
            });


            if(countryIdDb){
                const countryInfo={
                    id: countryIdDb.id,
                    name: countryIdDb.name,
                    image: countryIdDb.image,
                    coatOfArms: countryIdDb.coatOfArms,
                    continents: countryIdDb.continents,
                    capital: countryIdDb.capital,
                    subregion: countryIdDb.subregion,
                    area: countryIdDb.area,
                    population: countryIdDb.population,
                    maps: countryIdDb.maps,
                    activities: countryIdDb.Activities,
                }
                return res.status(200).json(countryInfo)
            }
        }
        return res.status(404).json({message: "No se encontro ningun pais con ese id"});
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports= getIdCountry