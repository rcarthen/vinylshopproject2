const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/api/shop', function (req, res) {
  //res.json({hello:"world"})//send back to postman for test 
  //Products is the variable from the product.js
  db.products.findAll({}).then(function (response, error) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});

module.exports= router 