const db = require("../models");
const { Op, where } = require("sequelize");
const cart = db.cart_master;
const cartProduct = db.cart_product;
const Product = db.product_master;

const setModel = (model) => {
  this.model = model;
};

const getModel = () => {
  return this.model;
};

module.exports = {
  setModel,
  getModel,

  add: async (user_id, product_id) => {
    try {
      const cartData = await cart.findOne({
        where: { user_id: user_id },
        raw: true,
      });

      if (cartData && product_id) {
        const cart_id = cartData.id;
        // check id the product in that cart already exist
        const existProduct = await cartProduct.findOne({
          where: {
            [Op.and]: [{ product_id: product_id }, { cart_id: cart_id }],
          },
          raw: true,
        });

        if (existProduct) {
          console.log("product already exist");

          const addProductQuantiy = await cartProduct.update(
            { product_quantity: existProduct.product_quantity + 1 },
            { where: { cart_id: cart_id, product_id: product_id } }
          );
        } else {
          const addCartProduct = await cartProduct.create({
            product_id: product_id,
            cart_id: cart_id,
            product_quantity: 1,
          });
        }
      }
    } catch (error) {
      return error;
    }
  },

  cartProducts: async (user_id) => {
    console.log("user_id", user_id);

    // find the car of the user on the basis of the cart id
    const findCart = await cart.findOne({
      where: { user_id: user_id },
      raw: true,
    });

    // if thr cat_id exist then fetch all the product id related to the cart
    if (findCart) {
      const cart_id = findCart.id;

      const productsOfCart = await cartProduct.findAll({
        where: { cart_id: cart_id },
        raw: true,
      });
      console.log("products", productsOfCart);

      if (productsOfCart) {
        const product_id = productsOfCart.map(
          (products) => products.product_id
        );

        const findAllProducts = await Product.findAll({
          where: [{ id: product_id }],
          raw: true,
        });
        return findAllProducts;
      }
    }
  },
};
