const express = require('express');

const EditorialService = require('./../services/editoriales.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createEditorialSchema, updateEditorialSchema, getEditorialSchema } = require('./../schemas/editorial.schema');

const router = express.Router();
const service = new EditorialService();

router.get('/', async (req, res, next) => {
  try {
    const editorial = await service.find();
    res.json(editorial);
  } catch (error) {
    next(error);
  }
});

router.get('/:idEditorial',
  validatorHandler(getEditorialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idEditorial } = req.params;
      const editorial = await service.findOne(idEditorial);
      res.json(editorial);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createEditorialSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEditorial = await service.create(body);
      res.status(201).json(newEditorial);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idEditorial',
  validatorHandler(getEditorialSchema, 'params'),
  validatorHandler(updateEditorialSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idEditorial } = req.params;
      const body = req.body;
      const category = await service.update(idEditorial, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idEditorial',
  validatorHandler(getEditorialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idEditorial } = req.params;
      await service.delete(idEditorial);
      res.status(201).json({idEditorial});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

