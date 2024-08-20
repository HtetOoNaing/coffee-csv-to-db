const express = require('express');
const connectDB = require('./config/db');
const importRouter = require('./routes/import');
const coffeeRouter = require('./routes/coffees');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', importRouter);
app.use('/api', coffeeRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});