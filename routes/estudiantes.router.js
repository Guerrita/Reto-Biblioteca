const express = require('express');

const StudentService = require('./../services/estudiantes.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createStudentSchema, updateStudentSchema, getStudentSchema } = require('./../schemas/estudiante.schema');

const router = express.Router();
const service = new StudentService();

router.get('/', async (req, res, next) => {
  try {
    const student = await service.find();
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.get('/:idLector',
  validatorHandler(getStudentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idLector } = req.params;
      const student = await service.findOne(idLector);
      res.json(student);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createStudentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newStudent = await service.create(body);
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idLector',
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(updateStudentSchema, 'body'),
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
  validatorHandler(getStudentSchema, 'params'),
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

