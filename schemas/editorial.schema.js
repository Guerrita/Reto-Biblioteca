const Joi = require('joi');

const idEditorial = Joi.number().integer();
const nombre = Joi.string().min(3).max(200);

const createEditorialSchema = Joi.object({
    idEditorial: idEditorial.required(),
    nombre: nombre.required()
});

const updateEditorialSchema = Joi.object({
    nombre: nombre
});


const getEditorialSchema = Joi.object({
    idEditorial: idEditorial.required()
});

module.exports = { createEditorialSchema, updateEditorialSchema, getEditorialSchema }
