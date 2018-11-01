const express = require("express");
const path = require("path");
const router= express.Router();




    router.get('/', function(req, res) {
        console.log(__dirname);
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

  
    router.get('/shop', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/shop.html'));
    });


    router.get('/legacy', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/legacy.html'));
    });




    
   
  

    module.exports= router 
