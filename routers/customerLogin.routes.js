const express = require("express");
const route = express.Router();

// routes for customer login

const customerAuthentication = require("../controllers/customerLogin.controllers")
const validate = require("../validations/customerLogin.validations")

// verify customer
route.post("/login",validate.loginSchema, customerAuthentication.customerAuth)

module.exports = route;