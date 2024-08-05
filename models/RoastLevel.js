const mongoose = require('mongoose');

const roastLevelSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('RoastLevel', roastLevelSchema);