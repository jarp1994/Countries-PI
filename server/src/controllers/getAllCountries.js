const axios = require('axios');
const {Country} = require('../db');

// trae toda los paises que necesito primero busca en la db y si no en la api
const getAllCountries = async (req,res) => {
    try {
        const countriesInDb = await Country.findAll();
        if (countriesInDb.length > 0) {
            res.status(200).json(countriesInDb);
            // console.log("entramos en la base de datos")
            return     
        }

        const responseURL = await axios.get('http://localhost:5000/countries');
        
        if(responseURL){
            const countries= responseURL.data.map(country=>({
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png,
                coatOfArms: country.coatOfArms.png,
                continent: country.region,
                capital: country.capital?.[0],
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                maps: country.maps.googleMaps
            
            }));
            // console.log("entramos a la api")
            const createinDb = Country.bulkCreate(countries)//--> se mandan los datos a la base de datos desde la api
            // console.log(createinDb, "CREADO EN LA BASE DE DATOS")
            res.status(200).json(countries);
        }
    } catch (error) {
        res.status(500).json('Error en el servidor');
    }
}

module.exports = getAllCountries
