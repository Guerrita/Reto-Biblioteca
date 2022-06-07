const express = require('express');

const EstudianteService = require('./../services/estudiantes.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createEstudianteSchema, updateEstudianteSchema, getEstudianteSchema } = require('./../schemas/estudiante.schema');

const router = express.Router();
const service = new EstudianteService();

router.get('/', async (req, res, next) => {
  try {
    const estudiante = await service.find();
    res.json(estudiante);
  } catch (error) {
    next(error);
  }
});

router.get('/carreras', async (req, res, next) => {
  try {
    const carreras = await service.findcareers();
    res.json(carreras);
  } catch (error) {
    next(error);
  }
});


router.get('/:idLector',
  validatorHandler(getEstudianteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idLector } = req.params;
      const estudiante = await service.findOne(idLector);
      res.json(estudiante);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createEstudianteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEstudiante = await service.create(body);
      res.status(201).json(newEstudiante);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idLector',
  validatorHandler(getEstudianteSchema, 'params'),
  validatorHandler(updateEstudianteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idLector } = req.params;
      const body = req.body;
      const category = await service.update(idLector, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:idLector',
  validatorHandler(getEstudianteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idLector } = req.params;
      await service.delete(idLector);
      res.status(201).json({idLector});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

