const express = require('express');
const apiRoutes = express.Router();
const plantController = require('../controllers/plantController.cjs');

// get all plants
apiRoutes.get('/plants', plantController.getAll);
apiRoutes.get('/plant/:name', plantController.getByName)

module.exports = apiRoutes;
