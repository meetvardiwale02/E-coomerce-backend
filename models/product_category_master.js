"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_category_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_category_master.belongsTo(models.product_master, {
        foreignKey: "product_id",
      });

      product_category_master.belongsTo(models.category_master, {
        foreignKey: "category_id",
      });
    }
  }
  product_category_master.init(
    {
      product_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category_master",
    }
  );
  return product_category_master;
};
