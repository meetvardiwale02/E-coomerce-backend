const db = require("../models");

const sellers = db.seller_master;
const category = db.category_master;
const product_category = db.product_category_master;
const product_master = db.product_master;

const setModel = (model) => {
  this.model = model;
};

const getModel = () => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  insertProduct: async (data) => {
    //console.log("data", data, getModel());
    const newProduct = await getModel().create(data);
    let findSellers = await sellers.findOne({ where: { id: 3 } });
    let findCategory = await category.findOne({ where: { id: 2 } });
    let sellerData = await newProduct.addSeller_master(findSellers);
    let catgoryData = await newProduct.addCategory_master(findCategory);
    console.log({ sellerData, catgoryData });
  },

  fetchAllProducts: async () => {
    const productsData = await getModel().findAll({ raw: true });
    console.log("reposirtoy data of products", productsData);
    return productsData;
  },

  fetchProductCategories: async (category_id) => {
    const data = await product_category.findAll({
      include: [ {model: product_master} ,  {model: category}] ,
          where: { category_id : category_id}  
     
    });
    return data;
  },
};
