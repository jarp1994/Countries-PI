const { Activity, Country } = require('../db.js');


const postActivities = async (req, res) => {
    try {
       const { name, difficulty, duration, season, countries } = req.body;
    //    if(!name || !difficulty || !duration || !season || !countries){
    //     return res.status(400).send({error: "Faltan datos, son necesarios todos los campos"})
    //    }
    //     const activity = await Activity.create({
    //         name,
    //         difficulty,
    //         duration,
    //         season
    //     })
    //     const country = await Country.findAll({
    //         where: {
    //             name: countries.map(country => country.toLowerCase().trim().charAt(0).toUpperCase() + country.slice(1))
    //         }
    //     })
    //     if(country.length !== countries.length){
    //         return res.status(400).send({error: "Uno de los paises no existe"})
    //     }
    //     await activity.addCountry(country)
    //     res.status(200).send({message:"se creo la actividad con exito"})
        
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports = postActivities