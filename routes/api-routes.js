const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/api/vinyl', function (req, res) {
  db.vinyl.findAll({}).then(function (error, response) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});

router.get('/api/vinyl/:id', function(req,res) {

  db.vinyl.findAll({where:{ id: req.params.id}}).then(function(error, response){
    if (error){
      res.json(error)
    }

    res.json(response)
  })
  // console.log(req.params.id)

});

router.get('/api/vinyl/:name', function (req, res) {
  db.vinyl.findAll({where:{id: req.params.id}}).then(function (error, response) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});


router.get('/api/userlogin', function (req, res) {
  //res.json({hello:"world"})//send back to postman for test 
  //Products is the variable from the product.js
  db.userlogin.findAll({}).then(function (response, error) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});

router.get("/api/cart", function(req, res){
  db.cart.findAll({}).then(function(response, error){
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});


//post items into cart
router.post("/api/cart", function(req, res){
  db.cart.create(req.body).then(function(response, error){
    if (error) {
      res.json(error)
    }
    res.json(response)
  });
})


//remove all items from the cart

// router.delete('/api/cart/', function(req, res) {
//     db.cart.findAll({}).then(function(response, error){
//       if (error) {
//         res.json(error)
//       }
//       res.json(response)
//     })
//   });

router.delete('/api/cart', function(req, res){
  db.cart.destroy({
    where: {},
    truncate: true
  })
.then(function(dbCart) {
  res.json(dbCart);
}).catch(function(error) {
  res.json({ error: error });
});
})

// db.cart.destroy(
//   {where: undefined},
//   {truncate: false}
// ).then(() => {
//   return 
// }).then(() => done());


//delete individual item from the cart
router.delete('/api/cart/:id', function(req, res) {
  db.cart.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbCart) {
    res.json(dbCart);
  }).catch(function(error) {
    res.json({ error: error });
  });
});





module.exports= router 