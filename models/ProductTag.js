const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


// extends this model from the sequelize model structure called "Model"// 
class ProductTag extends Model {}


// initializes and sets up the model data fields /// 
ProductTag.init(
  {
    product_tag_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      reference: {
        model: 'product',
        key: 'product_id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      reference: {
        model: 'tag',
        key: 'tag_id'
      }
    }

  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// exports the model to be used elsewhere // 
module.exports = ProductTag;
