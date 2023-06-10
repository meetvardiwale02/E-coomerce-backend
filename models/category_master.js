"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category_master.belongsToMany(models.product_master, {
        foreignKey: "category_id",
        through: models.product_category_master,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  category_master.init(
    {
      category_name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "category_master",
    }
  );
  return category_master;
};
