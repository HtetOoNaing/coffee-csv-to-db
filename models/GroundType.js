const mongoose = require('mongoose');

const groundTypeSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('GroundType', groundTypeSchema);