const { Model, DataTypes, Sequelize } = require('sequelize');

const CARRRERA_TABLE = 'carrera';

const CarreraSchema = {
  idCarrera: {
    allowNull: false,
    field: 'id_carrera',
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
}


class Carrera extends Model {

  static associate(models) {
    this.hasMany(models.Estudiante, {
      as: 'estudiante',
      foreignKey: 'idCarrera'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CARRRERA_TABLE,
      modelName: 'Carrera',
      timestamps: false
    }
  }
}

module.exports = { Carrera, CarreraSchema, CARRRERA_TABLE };
