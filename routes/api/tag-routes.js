const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


///////////////// GET ROUTES ///////////////////

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [{model: Product}]
  });
  res.status(200).json(tagData);
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
 const tagidData = await Tag.findByPk(req.params.id,
      {include: [{model:Product}]
  });
  res.status(200).json(tagidData);
 
});


  
/////////////////// POST ROUTES ///////////////////

  // create a new Tag // 
  router.post('/', (req, res) => {
    Tag.create({ 
      tag_name: req.body.tag_name,
      })
    .then((newTag) => {
      res.json(newTag); 
    })
    .catch((err) => {
      res.json(err); 
    }); 
  }); 


//////////////////// Update Routes //////////////////

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_id: req.body.tag_id, 
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then(() => {
      res.json(
        {
          tag_id: req.params.id, 
          tag_name: req.body.tag_name,
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









// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;
