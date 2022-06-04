const Joi = require('joi');

const idLibro = Joi.number().integer();
const titulo = Joi.string().min(3).max(200);
const idCategoria = Joi.number().integer();

const createLibroSchema = Joi.object({
    idLibro: idLibro.required(),
    titulo: titulo.required(),
    idCategoria: idCategoria.required()
});

const updateLibroSchema = Joi.object({
    titulo: titulo,
    idCategoria: idCategoria
});

const getLibroSchema = Joi.object({
    idLibro: idLibro.required(),
});

module.exports = { createLibroSchema, updateLibroSchema, getLibroSchema };
