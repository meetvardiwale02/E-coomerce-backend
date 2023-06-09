// this controllers define all the category related controlls
const db = require("../models");
const categories = db.category_master;

const {
  setModel,
  getModel,
  getAllCategories,
} = require("../repositories/categories.repository.js");

setModel(categories);
const getCategories = async (req, res) => {
  try {
    const categoryList = await getAllCategories();
    return res.json(categoryList);
  } catch (error) {
    if (error) {
      return res.json({
        statusCode: 404,
        responseMessage: "unsuccessfull operation",
      });
    }
  }
};


module.exports = { getCategories};
