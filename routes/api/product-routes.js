const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

///////////////// GET ROUTES ///////////////////

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  const productData = await Product.findAll({
    include: [{model: Category, Tag}]
  });
  res.status(200).json(productData);
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
 const productidData = await Product.findByPk(req.params.id,
      {include: [{model:Category, Tag}]
  });
  res.status(200).json(productidData);
 
});

  
/////////////////// POST ROUTES ///////////////////

  // create a new Product // 
  router.post('/', (req, res) => {
    Product.create({ 
      product_name: req.body.product_name,
      price: req.body.price, 
      stock: req.body.stock,
      category_id: req.body.category_id      
      })
    .then((newProduct) => {
      res.json(newProduct); 
    })
    .catch((err) => {
      res.json(err); 
    }); 
  }); 
  
  


//////////////////// Update Routes //////////////////

router.put('/:id', (req, res) => {
  Product.update(
    {
      product_id: req.body.product_id, 
      product_name: req.body.product_name,
      price: req.body.price, 
      stock: req.body.stock,
      category_id: req.body.category_id      
    },
    {
      where: {
        product_id: req.params.id,
      },
    }
  )
    .then(() => {
      res.json(
        {
          product_id: req.params.id, 
          product_name: req.body.product_name,
          price: req.body.price, 
          stock: req.body.stock,
          category_id: req.body.category_id,    
        },
      );
    })
    .catch((err) => res.json(err));
});


///////////// Delete Routes //////////////////


router.delete('/:id', (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Product.destroy({
    where: {
      product_id: req.params.id,
    },
  })
    .then((deletedProduct) => {
      res.json(deletedProduct);
    })
    .catch((err) => res.json(err));
});













module.exports = router;
