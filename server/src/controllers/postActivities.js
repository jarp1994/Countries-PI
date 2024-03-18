const { Activity, Country } = require('../db.js');


const postActivities = async (req, res) => {
    try {
        // traje las actividades del modelo
       const { name, difficulty, duration, season, countries } = req.body;
       if(!name || !difficulty || !duration || !season || !countries || countries.length === 0){
        return res.status(400).send({error: "Faltan datos, por favor ingresa todos los campos"})
       }
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        const countriesInDb = await Country.findAll({
            where: {
                id: countries
            }
        })
        //add activity to each country
        for(const country of countriesInDb){
            await country.addActivity(activity)
        }
        res.status(200).send({message:"se creo la actividad con exito"})
        
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports = postActivities