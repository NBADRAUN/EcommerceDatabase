const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// extends this model from the sequelize model structure called "Model"// 
class Category extends Model {}

// initializes and sets up the model data fields /// 
Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    category_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// exports the model to be used elsewhere // 
module.exports = Category;
