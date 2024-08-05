const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const coffeeSchema = new mongoose.Schema({
  brand_name: String,
  coffee_type: String,
  processing_method: String,
  no_of_bags: Number,
  net_weight: String,
  net_weight_unit: String,
  price: Number,
  contact: String,
  class_name: String,
  roast_level: { type: ObjectId, ref: 'RoastLevel' },
  fragrance: { type: ObjectId, ref: 'Fragrance' },
  flavor: { type: ObjectId, ref: 'Flavor' },
  ground_type: { type: ObjectId, ref: 'GroundType' },
  body: { type: ObjectId, ref: 'Body' },
});

module.exports = mongoose.model('Coffee', coffeeSchema);