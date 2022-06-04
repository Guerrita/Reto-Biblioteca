const Joi = require('joi');

const idLector = Joi.number().integer();
const ci = Joi.string().min(3).max(30);
const nombre= Joi.string().min(3).max(200);
const direccion = Joi.string();
const carrera=  Joi.number().integer();
const edad = Joi.number().integer();

const createStudentSchema = Joi.object({
  idLector: idLector.required(),
  ci: ci.required(),
  nombre: nombre.required(),
  direccion:direccion.optional(),
  carrera: carrera.required(),
  edad: edad.optional()
});

const updateStudentSchema = Joi.object({
  nombre: nombre,
  direccion: direccion,
  carrera: carrera,
  edad: edad
});

const getStudentSchema = Joi.object({
  idLector: idLector.required(),
});

module.exports = { createStudentSchema, updateStudentSchema, getStudentSchema };
