const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

const LibroService = require('./libros.service');

class CategoriaService {
  constructor() {}

  async create(data) {
    const newCategoria = await models.Categoria.create(data);
    return newCategoria;
  }

  async find() {
    const rta = await models.Categoria.findAll({
        include: ['libro']
      });
    return rta;
  }

  async findOne(idCategoria) {
    const categoria = await models.Categoria.findByPk(idCategoria,{
        include: ['libro']
      });
    if (!categoria) {
      throw boom.notFound('categoria not found');
    }
    return categoria;
  }

  async update(idCategoria, changes) {
    const categoria = await this.findOne(idCategoria);
    const rta = await categoria.update(changes);
    return rta;
  }

  async delete(idCategoria) {
    const categoria = await this.findOne(idCategoria);
    await categoria.destroy();
    return { rta: true };
  }
}

module.exports = CategoriaService;
