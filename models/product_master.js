"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //mamnt to many associations with the seller_master table
      product_master.belongsToMany(models.seller_master, {
        foreignKey: "product_id",
        through: models.seller_products,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // many to many relationship with the category_master table
      product_master.belongsToMany(models.category_master, {
        foreignKey: "product_id",
        through: models.product_category_master,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // one to many relationship with the cart_product table
      product_master.hasMany(models.cart_product, {
        foreignKey: "product_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // one to many relatinship witht order_products table
      product_master.hasMany(models.order_product, {
        foreignKey: "product_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  product_master.init(
    {
      product_name: DataTypes.STRING,
      product_image: DataTypes.STRING,
      product_price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      stalk: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "product_master",
    }
  );
  return product_master;
};
