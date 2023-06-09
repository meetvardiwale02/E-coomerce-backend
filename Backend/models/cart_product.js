"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_product.belongsTo(models.product_master, {
        foreignKey: "product_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      cart_product.belongsTo(models.cart_master, {
        foreignKey: "cart_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  cart_product.init(
    {
      product_id: DataTypes.INTEGER,
      cart_id: DataTypes.INTEGER,
      product_quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cart_product",
    }
  );
  return cart_product;
};
