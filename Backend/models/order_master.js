"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_master.belongsTo(models.customer_master, {
        foreignKey: "customer_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      order_master.hasMany(models.order_product , {
        foreignKey : "order_id",
        onDelete :"CASCADE",
        onUpdate : "CASCADE",
      })
      
    }
  }
  order_master.init(
    {
      user_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "order_master",
    }
  );
  return order_master;
};
