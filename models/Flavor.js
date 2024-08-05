const mongoose = require('mongoose');

const flavorSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('Flavor', flavorSchema);