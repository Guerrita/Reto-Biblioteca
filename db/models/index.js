const { func } = require('joi');
const {Estudiante, EstudianteSchema } = require('./estudiantes.model');
const {Categoria, CategoriaSchema } = require('./categorias.model');
const {Libro, LibroSchema } = require('./libros.model');
const {Prestamo, PrestamoSchema } = require('./prestamos.model');
const {Editorial, EditorialSchema } = require('./editoriales.model');

function setupModels(sequelize){
  Estudiante.init(EstudianteSchema, Estudiante.config(sequelize));
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Libro.init(LibroSchema, Libro.config(sequelize));
  Prestamo.init(PrestamoSchema, Prestamo.config(sequelize));
  Editorial.init(EditorialSchema, Editorial.config(sequelize));

  Categoria.associate(sequelize.models);
  Libro.associate(sequelize.models);
  Estudiante.associate(sequelize.models);
  Prestamo.associate(sequelize.models);
  Editorial.associate(sequelize.models);
}

module.exports = setupModels;
