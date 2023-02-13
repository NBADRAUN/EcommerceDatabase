const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

///////////////// GET ROUTES ///////////////////

router.get('/', async (req, res) => {
    // find all categories
  // be sure to include its associated Products
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  });

  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
   const categoryidData = await Category.findByPk(req.params.id,
        {include: [{model:Product}]
    });
    res.status(200).json(categoryidData);
   
  });
      
  
/////////////////// POST ROUTES ///////////////////

  // create a new category // 
router.post('/', (req, res) => {
  Category.create(
    {category_name: req.body.category_name})
  .then((newCategory) => {
    res.json(newCategory); 
  })
  .catch((err) => {
    res.json(err); 
  }); 
}); 

//////////////////// Update Routes //////////////////

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_id: req.body.category_id, 
      category_name: req.body.category_name
    },
    {
      where: {
        category_id: req.params.id,
      },
    }
  )
    .then(() => {
      // sends the updated category json response 
      res.json(
        {
          category_id: req.body.category_id, 
          category_name: req.body.category_name
        },

      );
    })
    .catch((err) => res.json(err));
});



///////////// Delete Routes //////////////////

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      category_id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});



module.exports = router;
