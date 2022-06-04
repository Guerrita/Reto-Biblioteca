const express = require('express');

const LibroService = require('./../services/libros.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createLibroSchema, updateLibroSchema, getLibroSchema } = require('./../schemas/libro.schema');

const router = express.Router();
const service = new LibroService();

router.get('/', async (req, res, next) => {
    try {
      const libros = await service.find(req.query);
      res.json(libros);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:idLibro',
  validatorHandler(getLibroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idLibro } = req.params;
      const libro = await service.findOne(idLibro);
      res.json(libro);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createLibroSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLibro = await service.create(body);
      res.status(201).json(newLibro);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idLibro',
  validatorHandler(getLibroSchema, 'params'),
  validatorHandler(updateLibroSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idLibro } = req.params;
      const body = req.body;
      const libro = await service.update(idLibro, body);
      res.json(libro);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idLibro',
  validatorHandler(getLibroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idLibro } = req.params;
      await service.delete(idLibro);
      res.status(201).json({idLibro});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
