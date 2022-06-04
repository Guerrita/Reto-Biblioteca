const Joi = require('joi');

const idLector = Joi.number().integer();
const ci = Joi.string().min(3).max(30);
const nombre= Joi.string().min(3).max(200);
const direccion = Joi.string();
const carrera=  Joi.number().integer();
const edad = Joi.number().integer();

const createEstudianteSchema = Joi.object({
  idLector: idLector.required(),
  ci: ci.required(),
  nombre: nombre.required(),
  direccion:direccion,
  carrera: carrera.required(),
  edad: edad
});

const updateEstudianteSchema = Joi.object({
  nombre: nombre,
  direccion: direccion,
  carrera: carrera,
  edad: edad
});

const getEstudianteSchema = Joi.object({
  idLector: idLector.required(),
});

module.exports = { createEstudianteSchema, updateEstudianteSchema, getEstudianteSchema };
