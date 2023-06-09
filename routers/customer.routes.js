const express = require("express");
const route = express.Router();

//define all the sql CRUd api here

const customer = require("../controllers/customer.controllers");
// middlleware for validation
const validate = require("../validations/customer.validations");
// api for inserting new customer
route.post("/register", validate.registersSchema, customer.insert);

// delete all emails this api is not used
route.delete("/deleteCustomer", customer.destroyCustomer);

// get avalid email
route.post("/validEmail", customer.getAllEmails);

module.exports = route;
