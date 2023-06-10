const db = require("../models");
const jwt = require("jsonwebtoken");

const {
  setModel,
  getModel,
  add,
  cartProducts,
  updateQnty,
  getQuantites,
  remove,
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
  console.log("cartt token", req.headers.token);
  const userToken = jwt.verify(req.headers.token, "customer@123");
  const user_id = userToken.credentials.id;
  console.log("view p cart roducts", user_id);
  const viewCartProducts = await cartProducts(user_id);
  console.log("viewCardProducts", viewCartProducts);
  return res.json(viewCartProducts);
};

const updateCartQnty = async (req, res) => {
  const userToken = jwt.verify(req.headers.token, "customer@123");
  const user_id = userToken.credentials.id;
  console.log("user Id", user_id);
  const qnty = req.body.qnty;
  const product_id = req.body.product_id;
  const qntyData = await updateQnty(user_id, qnty, product_id);
  console.log({ qntyData });
  return res.json(qntyData);
};

const getAllQuantity = async (req, res) => {
  const userToken = jwt.verify(req.headers.token, "customer@123");
  const user_id = userToken.credentials.id;
  const fetchQuantities = await getQuantites(user_id);
  return res.json(fetchQuantities);
};

const removeProduct = async (req, res) => {
  const userToken = jwt.verify(req.headers.token, "customer@123");
  const user_id = userToken.credentials.id;
  const product_id = req.params.id;
  const removeData = await remove(product_id, user_id);

  return res.json("remove  API is called");
};

module.exports = {
  addToCart,
  fetchCartProducts,
  updateCartQnty,
  getAllQuantity,
  removeProduct,
};
