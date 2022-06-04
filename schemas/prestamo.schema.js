const Joi = require('joi');

const idPrestamo = Joi.number().integer();
const idLector = Joi.number().integer();
const idLibro = Joi.number().integer();
const fechaPrestamo = Joi.date().raw();
const fechaDevolucion = Joi.date().raw();
const devuelto =  Joi.boolean();
const pago = Joi.date().raw();
const fechaVencimiento = Joi.date().raw();

const createPrestamoSchema = Joi.object({
    idPrestamo: idPrestamo.required(),
    idLibro: idLibro.required(),
    idLector: idLector.required(),
});

const updatePrestamoSchema = Joi.object({
    fechaDevolucion: fechaDevolucion,
    devuelto: devuelto,
    pago: pago
});

const getPrestamoSchema = Joi.object({
    idPrestamo: idPrestamo.required()
});

module.exports = { createPrestamoSchema, updatePrestamoSchema, getPrestamoSchema };
