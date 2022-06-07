const { Model, DataTypes, Sequelize } = require('sequelize');
const { Categoria } = require('./categorias.model');
const { ESTUDIANTE_TABLE } = require('./estudiantes.model');
const { LIBRO_TABLE } = require('./libros.model');

const PRESTAMO_TABLE = 'prestamo';

const PrestamoSchema = {
  idPrestamo: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id_prestamo',
    type: DataTypes.INTEGER
  },
  idLector: {
    allowNull: false,
    primaryKey: true,
    field: 'id_lector',
    type: DataTypes.INTEGER,
    references: {
      model: ESTUDIANTE_TABLE,
      key: 'id_lector'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },  
  idLibro: {
    allowNull: false,
    primaryKey: true,
    field: 'id_libro',
    type: DataTypes.INTEGER,
    references: {
      model: LIBRO_TABLE,
      key: 'id_libro'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fechaPrestamo: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: 'fecha_prestamo',
    defaultValue: Sequelize.NOW
  },
  fechaDevolucion: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: 'fecha_devolucion'
  },
  devuelto: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  fechaPago: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: 'fecha_pago'
  },
  fechaVencimiento: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: 'fecha_vencimiento',
    defaultValue:  null//new Date().getTime() + (1000 * 60 * 60 * 24 * 15)
  }
}

class Prestamo extends Model {
  static associate(models) {
    this.belongsTo(models.Estudiante, { as: 'lector', foreignKey: 'idLector' });
    this.belongsTo(models.Libro, { as: 'libro', foreignKey: 'idLibro' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRESTAMO_TABLE,
      modelName: 'Prestamo',
      timestamps: false
    }
  }
}


module.exports = { PRESTAMO_TABLE, PrestamoSchema, Prestamo }