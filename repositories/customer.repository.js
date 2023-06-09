const db = require("../models");
const cart = db.cart_master;

const setModel = (model) => {
  this.model = model;
};

const getModel = () => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  insertCustomer: async (data) => {
    //console.log("response of repository", data, getModel());

    const insertedData = await getModel().create(data);
    //    console.log({ insertedData });

    const insertCartData = await cart.create({ user_id: insertedData.id });
    //  console.log({ insertCartData });
  },

  getEmails: async (email) => {
    const emailData = await getModel().findOne({
      where: { email: email },
      attributes: ["email"],
    });
    // console.log({ emailData });
    return emailData;
  },

  deleteCustomer: async () => {
    const delEmail = await getModel().destroy({ truncate: { cascade: true } });
    return delEmail;
  },
};
