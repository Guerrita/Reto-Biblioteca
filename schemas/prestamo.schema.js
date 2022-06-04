const Joi = require('joi');

const idLector = Joi.number().integer();
const idLibro = Joi.number().integer();
const fechaPrestamo = Joidate().format('YYYY-MM-DD').utc();
const fechaDevolucion = Joi.date().format('YYYY-MM-DD').utc();
const devuelto =  Joi.boolean();
const fechaPago = Joi.date().format('YYYY-MM-DD').utc();
const fechaVencimiento = Joi.date().format('YYYY-MM-DD').utc();

const createLoanSchema = Joi.object({
    idLibro: idLibro.required(),
    idLector: idLector.required(),
    devuelto: devuelto.optional,
    fechaPago: fechaPago.optional(),
    fechaVencimiento: fechaVencimiento.optional()
});

const updateLoanSchema = Joi.object({
    titulo: titulo,
    idCategoria: idCategoria
});

const getLoanSchema = Joi.object({
    idLibro: idLibro.required(),
});

module.exports = { createLoanSchema, updateLoanSchema, getLoanSchema };
