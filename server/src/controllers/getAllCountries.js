const axios = require('axios');
const { Country, Activity } = require('../db');

// Trae todos los países que necesito; primero busca en la DB y si no, en la API
const getAllCountries = async (req, res) => {
    try {
        // Primero, intenta obtener países de la base de datos
        const countriesInDb = await Country.findAll({
            include: [{ model: Activity }],
        });

        if (countriesInDb.length > 0) {
            return res.status(200).json(countriesInDb);
        }

        // Si no hay países en la DB, consulta la API
        const responseURL = await axios.get('http://localhost:5000/countries');
        console.log('Datos de la API:', responseURL.data); // Para depuración

        if (responseURL) {
            const countries = responseURL.data.map(country => ({
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png,
                coatOfArms: country.coatOfArms.png,
                continent: country.region,
                capital: country.capital?.[0],
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                maps: country.maps.googleMaps,
                activities: [],
            }));

            // Intentar guardar los países en la base de datos
            const createInDb = await Country.bulkCreate(countries);
            return res.status(201).json(createInDb); // Enviar respuesta con los datos guardados
        }
    } catch (error) {
        console.error('Error en el servidor:', error); // Para depuración
        return res.status(500).json('Error en el servidor');
    }
}

module.exports = getAllCountries;

