const { func } = require('joi');
const {Estudiante, EstudianteSchema } = require('./estudiantes.model');
const {Categoria, CategoriaSchema } = require('./categorias.model');
const {Libro, LibroSchema } = require('./libros.model');
const {Prestamo, PrestamoSchema } = require('./prestamos.model');

function setupModels(sequelize){
  Estudiante.init(EstudianteSchema, Estudiante.config(sequelize));
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Libro.init(LibroSchema, Libro.config(sequelize));
  Prestamo.init(PrestamoSchema, Prestamo.config(sequelize));

  Categoria.associate(sequelize.models);
  Libro.associate(sequelize.models);
  Estudiante.associate(sequelize.models);
  Prestamo.associate(sequelize.models);
}

module.exports = setupModels;
