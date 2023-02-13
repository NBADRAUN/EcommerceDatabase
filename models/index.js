// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category//
// this creates the foreign key// 
    Product.belongsTo(Category, {foreignKey: 'category_id'}); 

// This creates the many to one relationship //
// Categories have many Products // 
    Category.hasMany(Product, {foreignKey: 'category_id'}); 

// Products belong to Tags // 
    ProductTag.belongsTo(Tag, {foreignKey: 'tag_id'})

// Products belongToMany Tags (through ProductTag) // 
// Product.belongsToMany(Tag, {
//       through: 'product_tag',
//       foreignKey: 'tag_id'
//     }); 

// Tags belongToMany Products (through ProductTag)
    
    Tag.belongsToMany(Product, {
        through: 'product_tag',
        foreignKey: 'product_id'
      });

// Export the modules to be used elsewhere// 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
