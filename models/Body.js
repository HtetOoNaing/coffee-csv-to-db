const mongoose = require('mongoose');

const bodySchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('Body', bodySchema);