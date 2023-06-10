"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_master.belongsTo(models.customer_master, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      cart_master.hasMany(models.cart_product, {
        foreignKey: "cart_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  cart_master.init(
    {
      user_id: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cart_master",
    }
  );
  return cart_master;
};
