//// global includes ////
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// model //
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true 
    }, 
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false 
    }, 
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
      defaultValue: 0
    }, 
    product_stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 0 
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      reference: {
        model: 'category',
        key: 'category_id'
      }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
