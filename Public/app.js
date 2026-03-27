const express = require('express');
const path    = require('path');

const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(express.static(path.join(__dirname)));
app.use('/developer', dashboardRoutes);

module.exports = app;
