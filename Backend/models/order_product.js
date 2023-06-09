"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to order
      order_product.belongsTo(models.order_master, {
        foreignKey: "order_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // belongs to product
      order_product.belongsTo(models.product_master, {
        foreignKey: "product_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  order_product.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      product_quantity: DataTypes.INTEGER,
      product_price: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order_product",
    }
  );
  return order_product;
};
