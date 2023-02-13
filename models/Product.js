//// global includes ////
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// extends this model from the sequelize model structure called "Model"// 
class Product extends Model {}

// initializes and sets up the model data fields /// 
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
      validate: {
        isDecimal: true
      }
    }, 
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      defaultValue: 0, 
      validate: {
        isNumeric: true
      } 
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

// exports the model to be used elsewhere // 
module.exports = Product;
