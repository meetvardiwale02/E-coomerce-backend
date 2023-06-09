const { raw } = require("express");
const db = require("../models");
const products = db.product_master;
const {
  setModel,
  getModel,
  insertProduct,
  fetchAllProducts,
  fetchProductCategories,
} = require("../repositories/products.repository");

// define all the operation function calls

setModel(products);

const insert = async (req, res) => {
  //console.log("req.body data", req.body);
  //res.json(req.body);
  try {
    const insertData = await insertProduct(req.body);
    return res.json({
      statusCode: 200,
      responseMessage: "insert message success",
      responseData: { insertData: insertData },
    });
  } catch (error) {
    return res.json({
      statusCode: 404,
      responseMessage: "unsuccessfull operation",
    });
  }
};

const fetchProducts = async (req, res) => {
  try {
    const callProducts = await fetchAllProducts();
    return res.json(callProducts);
  } catch (error) {
    console.log("error", error);
    if (error) {
      return res.json({
        statusCode: 404,
        responseMessage: "unsuccessfull operation",
      });
    }
  }
};

const productCategories = async (req, res) => {
  console.log("category id  ", req.params.id);

  const data = await fetchProductCategories(req.params.id);
  return res.json(data);
};

module.exports = { insert, fetchProducts, productCategories };
