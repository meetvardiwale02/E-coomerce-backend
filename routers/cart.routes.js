const express = require("express");
const route = express();

// routes for the cart operation

const cart = require("../controllers/cart.controllers");

//route for adding cart to the data
route.post("/addToCart", cart.addToCart);

//route for fetching the cart products
route.get("/fetchCartProducts", cart.fetchCartProducts);

module.exports = route;
