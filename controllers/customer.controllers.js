const bcrypt = require("bcrypt");
const db = require("../models");
const customer = db.customer_master;

// getting all the repository controlls
const {
  setModel,
  getModel,
  insertCustomer,
  getEmails,
  deleteCustomer,
  getAllEmail,
} = require("../repositories/customer.repository");
// defining API function calls here

//set model
setModel(customer);

const insert = async (req, res) => {
  //console.log("data in customer api", req);
  const customer_data = req.body;

  const password = await bcrypt.hash(req.body.password, 10);
  customer_data.password = password;
  const callrepo = await insertCustomer(customer_data);
};

const getAllEmails = async (req, res) => {
  //console.log("req.body email", req.body.email);
  const customer_email = await getEmails(req.body.email);
  //console.log("customer_emails", customer_email);

  if (customer_email) {
    return res.json("true");
  } else {
    return res.json("false");
  }
};

// this api is admin purpose not used in front end
const destroyCustomer = async (req, res) => {
  const delCustomer = await deleteCustomer();
  res.json(delCustomer);
};
module.exports = { insert, getAllEmails, destroyCustomer };
