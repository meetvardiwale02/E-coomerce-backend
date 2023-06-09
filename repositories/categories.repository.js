const db = require("../models");

const setModel = (model) => {
  this.model = model;
};

const getModel = () => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  getAllCategories: async () => {
    const data = await getModel().findAll();
    return data;
  },
};
