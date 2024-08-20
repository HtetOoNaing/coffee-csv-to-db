const Coffee = require('../models/Coffee');

const getCoffees = async (req, res) => {
  const coffees = await Coffee.find({}).populate('roast_level').populate('fragrance').populate('flavor').populate('ground_type').populate('body');
  res.status(200).json({
    status: 'OK',
    data: coffees
  })
};

module.exports = { getCoffees };