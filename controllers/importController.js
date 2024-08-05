const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const Coffee = require('../models/Coffee');
const RoastLevel = require('../models/RoastLevel');
const Fragrance = require('../models/Fragrance');
const Flavor = require('../models/Flavor');
const GroundType = require('../models/GroundType');
const Body = require('../models/Body');

const findOrCreate = async (Model, condition) => {
  let doc = await Model.findOne(condition);
  if (!doc) {
    doc = new Model(condition);
    await doc.save();
  }
  return doc;
};

const importCSV = (req, res) => {
  const csvFilePath = path.join(__dirname, '../csv/POL_Coffee_Sheet.csv');
  const results = [];
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        console.log(results);
        for (const row of results) {
          const roastLevel = await findOrCreate(RoastLevel, { type: row['Roast Level'] });
          const fragrance = await findOrCreate(Fragrance, { type: row['Fragrance'] });
          const flavor = await findOrCreate(Flavor, { type: row['Flavor'] });
          const groundType = await findOrCreate(GroundType, { type: row['Ground Type'] });
          const body = await findOrCreate(Body, { type: row['Body'] });

          const coffee = new Coffee({
            brand_name: row['Brand Name'],
            coffee_type: row['Coffee Type'],
            processing_method: row['Processing Method'],
            no_of_bags: row['Number of Bags'],
            net_weight: row['Net Weight'],
            net_weight_unit: 'g',
            price: row['Price'],
            contact: row['Contact '],
            class_name: row['Class Name'],
            roast_level: roastLevel._id,
            fragrance: fragrance._id,
            flavor: flavor._id,
            ground_type: groundType._id,
            body: body._id,
          });

          await coffee.save();
        }
        res.status(200).json({ message: 'CSV data successfully imported' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
};

module.exports = { importCSV };