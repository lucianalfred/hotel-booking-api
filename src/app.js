const express = require('express');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', hotelRoutes);

module.exports = app;