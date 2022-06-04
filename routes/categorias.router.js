const express = require('express');

const CategoriaService = require('./../services/categorias.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCategoriaSchema, updateCategoriaSchema, getCategoriaSchema } = require('./../schemas/categoria.schema');

const router = express.Router();
const service = new CategoriaService();

router.get('/', async (req, res, next) => {
  try {
    const categoria = await service.find();
    res.json(categoria);
  } catch (error) {
    next(error);
  }
});

router.get('/:idCategoria',
  validatorHandler(getCategoriaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCategoria } = req.params;
      const categoria = await service.findOne(idCategoria);
      res.json(categoria);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCategoriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategoria = await service.create(body);
      res.status(201).json(newCategoria);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idCategoria',
  validatorHandler(getCategoriaSchema, 'params'),
  validatorHandler(updateCategoriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idCategoria } = req.params;
      const body = req.body;
      const category = await service.update(idCategoria, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idCategoria',
  validatorHandler(getCategoriaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCategoria } = req.params;
      await service.delete(idCategoria);
      res.status(201).json({idCategoria});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

