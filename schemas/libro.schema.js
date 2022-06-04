const Joi = require('joi');

const idLibro = Joi.number().integer();
const titulo = Joi.string().min(3).max(200);
const idCategoria = Joi.number().integer();

const createBookSchema = Joi.object({
    idLibro: idLibro.required(),
    titulo: titulo.required(),
    idCategoria: idCategoria.required()
});

const updateBookSchema = Joi.object({
    titulo: titulo,
    idCategoria: idCategoria
});

const getBookSchema = Joi.object({
    idLibro: idLibro.required(),
});

module.exports = { createBookSchema, updateBookSchema, getBookSchema };
