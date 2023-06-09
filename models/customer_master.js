"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer_master.hasOne(models.cart_master, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      customer_master.hasMany(models.order_master, {
        foreignKey: "customer_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  customer_master.init(
    {
      name: DataTypes.STRING,
      number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customer_master",
    }
  );
  return customer_master;
};
