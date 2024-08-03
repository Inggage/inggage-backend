const express = require("express");
const router = express.Router();

// Load Cart model
const Cart = require("../models/cart");

// @route   POST api/cart
// @desc    Add data to the cart
// @access  Public
router.post("/", (req, res) => {
  const newCart = new Cart({
    person1: req.body.person1,
    person2: req.body.person2,
    person3: req.body.person3,
  });

  newCart
    .save()
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json({ error: "Unable to add this cart" }));
});

// @route   GET api/cart
// @desc    Get all cart data
// @access  Public
router.get("/", (req, res) => {
  Cart.find()
    .then((cart) => res.json(cart))
    .catch((err) => res.status(404).json({ nocartfound: "No cart found" }));
});

module.exports = router;
