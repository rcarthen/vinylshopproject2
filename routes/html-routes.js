const express = require("express");
const path = require("path");

module.exports = function(app) {

    app.get('/', function(req, res) {
        console.log(__dirname);
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

  
   
  };