const mongoose = require('mongoose');

const fragranceSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('Fragrance', fragranceSchema);