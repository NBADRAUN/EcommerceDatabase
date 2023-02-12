const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


///////////////// GET ROUTES ///////////////////

router.get('/', async (req, res) => {
    // find all categories
  // be sure to include its associated Products
    const categoryData = await Category.findAll({
      include: [{ model: Product,attributes: {exclude: ['category_id']}}],
      attributes: {exclude: ['category_id']} 
    });
    res.status(200).json(categoryData);
  });

  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
   const categoryidData = await Category.findByPk(req.params.id,
        {include: [{model:Product, attributes: {exclude: ['category_id']}}],
    });
    res.status(200).json(categoryidData);
   
  });
      
  
/////////////////// POST ROUTES ///////////////////

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
