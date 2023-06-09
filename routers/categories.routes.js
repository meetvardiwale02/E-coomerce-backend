const express = require("express");
const route = express();

//define all the routes regarding to categories

const categories = require("../controllers/categories.controllers");

//route for fetchin all the categories to navbar dropdown
route.get("/fetchCategories", categories.getCategories);

module.exports = route;
