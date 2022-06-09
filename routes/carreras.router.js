const express = require('express');

const CarreraService = require('./../services/carreras.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCarreraSchema, updateCarreraSchema, getCarreraSchema } = require('./../schemas/carrera.schema');

const router = express.Router();
const service = new CarreraService();

router.get('/', async (req, res, next) => {
  try {
    const carrera = await service.find();
    res.json(carrera);
  } catch (error) {
    next(error);
  }
});

router.get('/num/carrera', async (req, res, next) => {
  try {
    const carrera = await service.EstudiantesPorCarrera();
    res.json(carrera);
  } catch (error) {
    next(error);
  }
});

router.get('/:idCarrera',
  validatorHandler(getCarreraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCarrera } = req.params;
      const carrera = await service.findOne(idCarrera);
      res.json(carrera);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCarrera = await service.create(body);
      res.status(201).json(newCarrera);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idCarrera',
  validatorHandler(getCarreraSchema, 'params'),
  validatorHandler(updateCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idCarrera } = req.params;
      const body = req.body;
      const category = await service.update(idCarrera, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idCarrera',
  validatorHandler(getCarreraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idCarrera } = req.params;
      await service.delete(idCarrera);
      res.status(201).json({idCarrera});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

