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

  async findcareers() {
    const [results, metadata] = await models.Prestamo.sequelize.query("SELECT e.carrera, COUNT(e.carrera) as numero_estudiantes  from estudiante e GROUP BY e.carrera order by e.carrera desc"); 
    return results;
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
