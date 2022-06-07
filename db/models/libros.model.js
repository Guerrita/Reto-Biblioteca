const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORIA_TABLE } = require('./categorias.model');
const {EDITORIAL_TABLE} = require('./editoriales.model');

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
    field: 'categoria',
    references: {
      model: CATEGORIA_TABLE,
      key: 'id_categoria'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idEditorial: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'editorial',
    references: {
      model: EDITORIAL_TABLE,
      key: 'id_editorial'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Libro extends Model {
  static associate(models) {
    this.belongsTo(models.Categoria, { as: 'categoria', foreignKey: 'idCategoria' });
    this.belongsTo(models.Editorial, { as: 'editorial', foreignKey: 'idEditorial' });
    this.hasMany(models.Prestamo, {
      as: 'prestamo',
      foreignKey: 'idLibro'
    });
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

module.exports = { Libro, LibroSchema, LIBRO_TABLE  }
