const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class PrestamoService {
  constructor() {}
    //new Date().getTime() + (1000 * 60 * 60 * 24 * 15)
  async create(data) {
    console.log(data);
    const newPrestamo = await models.Prestamo.create(data);
    return data;
  }

  async find() {
    const rta = await models.Prestamo.findAll();
    return rta;
  }

  async findOne(idPrestamo) {
    const prestamo = await models.Prestamo.findByPk(idPrestamo);
    if (!prestamo) {
      throw boom.notFound('prestamo not found');
    }
    return prestamo;
  }

  async update(idPrestamo, changes) {
    const prestamo = await this.findOne(idPrestamo);
    const rta = await prestamo.update(changes);
    return rta;
  }

  async delete(idPrestamo) {
    const prestamo = await this.findOne(idPrestamo);
    await prestamo.destroy();
    return { idPrestamo };
  }
}

module.exports = PrestamoService;
