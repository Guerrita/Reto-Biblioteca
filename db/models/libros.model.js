const { Model, DataTypes, Sequelize } = require('sequelize');

const LIBRO_TABLE = 'libro';

const LibroSchema = {
  idLibro: {
    allowNull: false,
    primaryKey: true,
    field: 'id_libro',
    type: DataTypes.INTEGER
  },
  titulo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  idCategoria: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_categoria'
  }
}

class Libro extends Model {
  static associate() {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LIBRO_TABLE,
      modelName: 'Libro',
      timestamps: false
    }
  }
}

module.exports = { LIBRO_TABLE, LibroSchema, Libro }
