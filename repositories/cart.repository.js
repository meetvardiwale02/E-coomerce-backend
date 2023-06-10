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
    try {
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
          include: [{ model: Product }],
        });

        console.log("adsds", productsOfCart);
        return productsOfCart;
      }
    } catch (error) {
      return error;
    }
  },

  updateQnty: async (user_id, qnty, product_id) => {
    console.log({ user_id, qnty, product_id });
    try {
      // find the cart id from the user id
      const cartData = await cart.findOne({
        where: { user_id: user_id },
        raw: true,
      });

      if (cartData) {
        const cart_id = cartData.id;
        // console.log("cart data", cart_id);

        // fetch the stock from the product master to check the stocl value
        const productData = await Product.findOne({
          where: { id: product_id },
          raw: true,
        });
        console.log({ productData });
        const stock = productData.stalk;
        // console.log("stock quantioty", stock);

        // compare the stock and quantity
        if (qnty <= stock) {
          // find the cart id and product id from the cart -product master
          console.log("cart_id", cart_id, "product_id", product_id);
          const updateQuantity = await cartProduct.update(
            { product_quantity: qnty },
            { where: { cart_id: cart_id, product_id: product_id }, raw: true }
          );

          console.log(updateQuantity);
          if (updateQuantity) {
            console.log("inside if");
            const quantityOfProduct = await cartProduct.findOne({
              where: { product_id: product_id, cart_id: cart_id },
              raw: true,
            });

            return quantityOfProduct.product_quantity;
          } else {
            return false;
          }
        }
      }
    } catch (error) {
      return error;
    }
  },

  getQuantites: async (user_id) => {
    try {
      const cartData = await cart.findOne({
        where: { user_id: user_id },
        raw: true,
      });

      if (cartData) {
        const cart_id = cartData.id;

        const productQuantites = await cartProduct.findAll({
          where: { cart_id: cart_id },
          raw: true,
        });
        return productQuantites;
      }
    } catch (error) {}
  },

  remove: async (product_id, user_id) => {
    const cartData = await cart.findOne({
      where: { user_id: user_id },
      raw: true,
    });

    if (cartData) {
      const cart_id = cartData.id;

      const removeProducts = await cartProduct.destroy({
        where: { cart_id: cart_id, product_id: product_id },
      });
      console.log("remove products", removeProducts);
    }
  },
};
