const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CarreraService {
  constructor() {}

  async create(data) {
    const newCarrera = await models.Carrera.create(data);
    return newCarrera;
  }

  async find() {
    const rta = await models.Carrera.findAll({
        include: ['estudiante']
      });
    return rta;
  }

  async EstudiantesPorCarrera(){
    const [results, metadata] = await models.Carrera.sequelize.query("SELECT e.nombre,  Count(l.id_lector) as TOTAL  from carrera e left join estudiante as l on (e.id_carrera = l.carrera) group By e.nombre order by Count(l.id_lector) DESC"); 
    return results;
  }

  async findOne(idCarrera) {
    const carrera = await models.Carrera.findByPk(idCarrera,{
        include: ['estudiante']
      });
    if (!carrera) {
      throw boom.notFound('carrera not found');
    }
    return carrera;
  }

  async update(idCarrera, changes) {
    const carrera = await this.findOne(idCarrera);
    const rta = await carrera.update(changes);
    return rta;
  }

  async delete(idCarrera) {
    const carrera = await this.findOne(idCarrera);
    await carrera.destroy();
    return { rta: true };
  }
}

module.exports = CarreraService;
