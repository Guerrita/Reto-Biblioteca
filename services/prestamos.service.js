const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class PrestamoService {
  constructor() {}
    //new Date().getTime() + (1000 * 60 * 60 * 24 * 15)
  async create(data) {
    const newPrestamo = await models.Prestamo.create(data);
    return newPrestamo;
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

  async findMostLoans() {
    const [results, metadata] = await models.Prestamo.sequelize.query("SELECT e.nombre, npe.id_lector, MAX(npe.numero_prestamos) as num_prestamos  from (SELECT id_lector, COUNT(id_lector) as numero_prestamos FROM prestamo where devuelto = false or devuelto = true  GROUP BY id_lector) as npe, estudiante e where npe.id_lector = e.id_lector  GROUP BY npe.id_lector, e.nombre order by num_prestamos desc limit 5"); 
    return results;
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
