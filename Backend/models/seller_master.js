'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seller_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seller_master.belongsToMany(models.product_master,{
        foreignKey : "seller_id",
        through : models.seller_products,
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    }
  }
  seller_master.init({
    seller_name: DataTypes.STRING,
    email: DataTypes.STRING,
    brand_name: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'seller_master',
  });
  return seller_master;
};