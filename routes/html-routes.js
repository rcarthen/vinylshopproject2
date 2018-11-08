const express = require("express");
const path = require("path");
const router= express.Router();


///setting up all the html routes home, shop, signin, register, cart

    router.get('/', function(req, res) {
        console.log(__dirname);
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

    router.get('/shop', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/shop.html'));
    });

    router.get('/signin', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/signin.html'));
    });

    router.get('/register', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/register.html'));
    });

    router.get('/cart', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/cart.html'));
    });

    
   
  

    module.exports= router 
