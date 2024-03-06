const { Activity, Country } = require('../db.js');



const getactivities = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: [{
                model: Country
            }]
        });
        // console.log(activities, "activities")
        res.status(200).json(activities)
        
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports = getactivities