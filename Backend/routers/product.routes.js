const express = require("express");
const route = express.Router();

// define all the route for the products

const product = require("../controllers/products.controllers");
const validate = require("../validations/product.validations");

// route for adding the new products
route.post("/add-products", validate.validateSchema, product.insert);

//route for fetching all the products
route.get("/viewProducts", product.fetchProducts);

// route for fetching the products according to the categories
route.get("/productCategory/:id", product.productCategories);

module.exports = route;
