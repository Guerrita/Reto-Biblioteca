const express = require('express');

const PrestamoService = require('./../services/prestamos.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createPrestamoSchema, updatePrestamoSchema, getPrestamoSchema } = require('./../schemas/prestamo.schema');

const router = express.Router();
const service = new PrestamoService();

router.get('/', async (req, res, next) => {
  try {
    const prestamo = await service.find();
    res.json(prestamo);
  } catch (error) {
    next(error);
  }
});

router.get('/max', async (req, res, next) => {
  try {
    const prestamo = await service.findMostLoans();
    res.json(prestamo);
  } catch (error) {
    next(error);
  }
});


router.get('/:idPrestamo',
  validatorHandler(getPrestamoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPrestamo } = req.params;
      const prestamo = await service.findOne(idPrestamo);
      res.json(prestamo);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPrestamoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPrestamo = await service.create(body);
      res.status(201).json(newPrestamo);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idPrestamo',
  validatorHandler(getPrestamoSchema, 'params'),
  validatorHandler(updatePrestamoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idPrestamo } = req.params;
      const body = req.body;
      const category = await service.update(idPrestamo, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idPrestamo',
  validatorHandler(getPrestamoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idPrestamo } = req.params;
      await service.delete(idPrestamo);
      res.status(201).json({idPrestamo});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

