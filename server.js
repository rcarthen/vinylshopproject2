const express = require('express');
const sequelize= require('sequelize');
const path= require('path');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });

  db.vinyl.create({
  	product_name: 'The Beatles Yellow Submarine',
  	department_name: "Vinyls",
    price: 6000,
    quantity: 3
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Record Player',
  	department_name: 'Vinyl Technology',
    price: 150,
    quantity: 5
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Solid Teak Record Cabinet',
  	department_name: 'Vinyl Organization',
    price: 300,
    quantity: 11
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Three Little Birds T-Shirt',
  	department_name: 'Apparel',
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Purple Rain',
  	department_name: "Vinyls",
    price: 250,
    quantity: 3
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Mama Miriam Makeba T-Shirt',
  	department_name: "Apparel",
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Rose Gold Vinyl Frame',
  	department_name: 'Vinyl Organization',
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'Rose Gold Vinyl Frame',
  	department_name: 'Vinyl Organization',
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });


  db.vinyl.create({
  	product_name: 'Elvis Presley Jailhouse Rock',
  	department_name: 'Vinyls',
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.vinyl.create({
  	product_name: 'LP Vinyl Record UltraSonic Cleaner',
  	department_name: 'Vinyl Technlogy',
    price: 25,
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.userlogin.create({
  	name: 'Sallie Mae',
  	email: 'abclol@aol.com',
    password: 'yougotthis',
    quantity: 100
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });



});
