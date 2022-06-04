const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_TABLE = 'categoria';

const CategoriaSchema = {
  idCategoria: {
    allowNull: false,
    field: 'id_categoria',
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  precioDia: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  dias: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
}


class Categoria extends Model {

  static associate(models) {
    this.hasMany(models.Libro, {
      as: 'libro',
      foreignKey: 'idCategoria'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categoria',
      timestamps: false
    }
  }
}

module.exports = { Categoria, CategoriaSchema, CATEGORIA_TABLE };
