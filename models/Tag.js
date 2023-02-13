const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


// extends this model from the sequelize model structure called "Model"// 
class Tag extends Model {}

// initializes and sets up the model data fields /// 
Tag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true
    }, 
    tag_name: {
      type: DataTypes.STRING, 
      allowNull: false, 
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// exports the model to be used elsewhere // 
module.exports = Tag;
