const express = require('express');
const connectDB = require('./config/db');
const importRoute = require('./routes/import');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', importRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});