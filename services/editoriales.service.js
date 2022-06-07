const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class EditorialService {
  constructor() {}

  async create(data) {
    const newEditorial = await models.Editorial.create(data);
    return newEditorial;
  }

  async find() {
    const rta = await models.Editorial.findAll({
        include: ['libro']
      });
    return rta;
  }

  async findOne(idEditorial) {
    const editorial = await models.Editorial.findByPk(idEditorial,{
        include: ['libro']
      });
    if (!editorial) {
      throw boom.notFound('editorial not found');
    }
    return editorial;
  }

  async update(idEditorial, changes) {
    const editorial = await this.findOne(idEditorial);
    const rta = await editorial.update(changes);
    return rta;
  }

  async delete(idEditorial) {
    const editorial = await this.findOne(idEditorial);
    await editorial.destroy();
    return { rta: true };
  }
}

module.exports = EditorialService;
