const express = require("express");
const router = express.Router();
const db = require("../models");

///api route to get all products (vinyls)
router.get('/api/vinyl', function (req, res) {
  db.vinyl.findAll({}).then(function (error, response) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});

///api route to get each individual product(vinyl)
router.get('/api/vinyl/:id', function (req, res) {

  db.vinyl.findAll({
    where: {
      id: req.params.id
    }
  }).then(function (error, response) {
    if (error) {
      res.json(error)
    }

    res.json(response)
  })
});


// router.get('/api/userlogin', function (req, res) {
//   db.userlogin.findAll({}).then(function (response, error) {
//     if (error) {
//       res.json(error)
//     }
//     res.json(response)
//   })
// });


router.get("/api/cart", function (req, res) {
  db.cart.findAll({}).then(function (response, error) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  })
});


// router post items into cart
router.post("/api/cart", function (req, res) {
  db.cart.create(req.body).then(function (response, error) {
    if (error) {
      res.json(error)
    }
    res.json(response)
  });
})

//remove all items from the cart
router.delete('/api/cart', function (req, res) {
  db.cart.destroy({
      where: {},
      truncate: true
    })
    .then(function (dbCart) {
      res.json(dbCart);
    }).catch(function (error) {
      res.json({
        error: error
      });
    });
})

//route to delete individual item from the cart
router.delete('/api/cart/:id', function (req, res) {
  db.cart.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbCart) {
    res.json(dbCart);
  }).catch(function (error) {
    res.json({
      error: error
    });
  });
});

module.exports = router