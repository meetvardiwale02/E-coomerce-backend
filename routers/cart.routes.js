const express = require("express");
const route = express();

// routes for the cart operation

const cart = require("../controllers/cart.controllers");

//route for adding cart to the data
route.post("/addToCart", cart.addToCart);

//route for fetching the cart products
route.get("/fetchCartProducts", cart.fetchCartProducts);

//route to update the quantity
route.post("/updateQnty", cart.updateCartQnty);

// route for getting the updated quantity
route.get("/getQuantity", cart.getAllQuantity);

// route to remove the product from the cart
route.delete("/removeProduct/:id", cart.removeProduct);

module.exports = route;
