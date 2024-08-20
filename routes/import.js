const express = require('express');
const importRouter = express.Router();
const { importCSV } = require('../controllers/importController');

importRouter.post('/import', importCSV);

module.exports = importRouter;