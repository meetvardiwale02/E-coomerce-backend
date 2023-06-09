const db = require("../models");
const jwt = require("jsonwebtoken");

const {
  setModel,
  getModel,
  add,
  cartProducts,
} = require("../repositories/cart.repository");
//define all the database function call here
const addToCart = async (req, res) => {
  const token = jwt.verify(req.body.user_id, "customer@123");
  const user_id = token.credentials.id;
  const product_id = req.body.product_id;

  const cartProducts = await add(user_id, product_id);
  return res.json("add to cart api is called ");
};

// fetch the cart products
const fetchCartProducts = async (req, res) => {
  // fetcht the headers for finding the user and cart

  const userToken = jwt.verify(req.headers.token, "customer@123");
  const user_id = userToken.credentials.id;

  const viewCartProducts = await cartProducts(user_id);
  console.log("viewCardProducts", viewCartProducts);
  return res.json(viewCartProducts);
};

module.exports = { addToCart, fetchCartProducts };
