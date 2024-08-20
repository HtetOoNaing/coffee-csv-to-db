const express = require('express');
const { getCoffees } = require('../controllers/coffeeController');
const coffeeRouter = express.Router();

coffeeRouter.get('/coffees', getCoffees);

module.exports = coffeeRouter;