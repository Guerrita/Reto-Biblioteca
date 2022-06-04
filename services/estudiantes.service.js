const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class EstudianteService {
  constructor() {}

  async create(data) {
    const newStudent = await models.Estudiante.create(data);
    return newStudent;
  }

  async find() {
    const rta = await models.Estudiante.findAll();
    return rta;
  }

  async findOne(idLector) {
    const student = await models.Estudiante.findByPk(idLector);
    if (!student) {
      throw boom.notFound('student not found');
    }
    return student;
  }

  async update(idLector, changes) {
    const student = await this.findOne(idLector);
    const rta = await student.update(changes);
    return rta;
  }

  async delete(idLector) {
    const student = await this.findOne(idLector);
    await student.destroy();
    return { idLector };
  }
}

module.exports = EstudianteService;
