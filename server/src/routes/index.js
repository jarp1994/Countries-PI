const { Router } = require("express");
const router = Router();
const getAllCountries  = require("../controllers/getAllCountries.js");
const getNameCountry = require("../controllers/getNameCountries.js");
const getIdCountry = require("../controllers/getIdCountry.js");
const postActivities = require("../controllers/postActivities.js");
const getActivities = require("../controllers/getActivities.js");
const deleteActivity = require("../controllers/deleteActivity.js");

// las rutas

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getAllCountries);

router.get('/countries/:idPais', getIdCountry )

router.get('/name', getNameCountry) //--> name?name=Colombia

router.post('/activities', postActivities)

router.get('/activities', getActivities)

router.delete('/activities/:id', deleteActivity)



module.exports = router
