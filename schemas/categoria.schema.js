const Joi = require('joi');

const idCategoria = Joi.number().integer();
const precioDia = Joi.number().integer();
const dias = Joi.number().integer();
const nombre = Joi.string().min(3).max(200);

const createCategoriaSchema = Joi.object({
    idCategoria: idCategoria.required(),
    precioDia: precioDia.required(),
    dias: dias.required(),
    nombre: nombre.required()
});

const updateCategoriaSchema = Joi.object({
    precioDia: precioDia,
    dias: dias,
    nombre: nombre
});


const getCategoriaSchema = Joi.object({
    idCategoria: idCategoria.required()
});

module.exports = { createCategoriaSchema, updateCategoriaSchema, getCategoriaSchema }
