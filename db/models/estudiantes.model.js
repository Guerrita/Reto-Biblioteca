const { Model, DataTypes, Sequelize } = require('sequelize');

const ESTUDIANTE_TABLE = 'estudiante';
const CARRERA_TABLE = 'carrera';

const EstudianteSchema = {
  idLector: {
    allowNull: false,
    primaryKey: true,
    field: 'id_lector',
    type: DataTypes.INTEGER
  },
  ci: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING
  },
  idCarrera: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'carrera',
    references: {
      model: CARRERA_TABLE,
      key: 'id_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  edad: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
}

class Estudiante extends Model {
  static associate(models) {
    this.belongsTo(models.Carrera, { as: 'carrera', foreignKey: 'idCarrera' });
    this.hasMany(models.Prestamo, {
      as: 'prestamo',
      foreignKey: 'idLector'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTUDIANTE_TABLE,
      modelName: 'Estudiante',
      timestamps: false
    }
  }
}


module.exports = { ESTUDIANTE_TABLE, EstudianteSchema, Estudiante }
