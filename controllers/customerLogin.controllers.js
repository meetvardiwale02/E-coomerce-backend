const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../models");
const customer = db.customer_master;

const {
  setModel,
  getModel,
  verifyCustomer,
} = require("../repositories/customerLogin.repository");

setModel(customer);
// define all rhe api function calls here
const customerAuth = async (req, res) => {
  //    console.log(" login data", req.body);
  const userData = await verifyCustomer(req.body.email);

  if (userData) {
    const matchPassword = bcrypt.compareSync(
      req.body.password,
      userData.password
    );
    console.log("hash sboolean", matchPassword);
    if (matchPassword) {
      const customerToken = jwt.sign({ credentials: userData }, "customer@123");
      console.log("customerToken", customerToken);
      return res.json(customerToken);
    }
  } else {
    return res.json(false);
  }
};

module.exports = { customerAuth };
