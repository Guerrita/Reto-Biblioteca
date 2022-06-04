const { func } = require('joi');
const {Estudiante, EstudianteSchema } = require('./estudiantes.model');

function setupModels(sequelize){
  Estudiante.init(EstudianteSchema, Estudiante.config(sequelize));
}

module.exports = setupModels;
