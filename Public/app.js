/* app.js*/
const express = require('express');
const path    = require('path');

const dashboardRoutes = require('./routes/dashboard');
const dashboardRecrutadorRoutes = require('./routes/dashboard_Recrutador');

const app = express();

app.use(express.static(path.join(__dirname)));
app.use('/developer', dashboardRoutes);
app.use('/recrutador', dashboardRecrutadorRoutes);

module.exports = app;
