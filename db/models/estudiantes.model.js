const { Model, DataTypes, Sequelize } = require('sequelize');

const ESTUDIANTE_TABLE = 'estudiante';

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
  carrera: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  edad: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}

class Estudiante extends Model {
  static associate() {
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
