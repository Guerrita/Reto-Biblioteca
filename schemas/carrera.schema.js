const Joi = require('joi');

const idCarrera = Joi.number().integer();
const nombre = Joi.string().min(3).max(200);

const createCarreraSchema = Joi.object({
    idCarrera: idCarrera.required(),
    nombre: nombre.required()
});

const updateCarreraSchema = Joi.object({
    nombre: nombre
});


const getCarreraSchema = Joi.object({
    idCarrera: idCarrera.required()
});

module.exports = { createCarreraSchema, updateCarreraSchema, getCarreraSchema }
