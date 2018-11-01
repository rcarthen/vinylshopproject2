const express = require('express');
const sequelize= require('sequelize');
const path= require('path');
const apiRoutes= require("./routes/api-routes.js");
const htmlRoutes = require("./routes/html-routes.js");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(apiRoutes);
app.use(htmlRoutes);

// Static directory
app.use(express.static('public'));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });

  
});

