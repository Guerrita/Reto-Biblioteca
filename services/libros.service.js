const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class LibroService {

  constructor(){}

  async create(data) {
    const newLibro = await models.Libro.create(data);
      return newLibro;
  }

  async find() {
    const rta = await models.Libro.findAll();
    return rta;
  }

  async findOne(id) {
    const libro = await models.Libro.findByPk(id, {
        include: ['categoria']
      });
    if (!libro) {
      throw boom.notFound('libro not found');
    }
    return libro;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = LibroService;
