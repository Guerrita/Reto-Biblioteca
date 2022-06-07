const { Model, DataTypes, Sequelize } = require('sequelize');

const Editorial_TABLE = 'editorial';

const EditorialSchema = {
  idEditorial: {
    allowNull: false,
    field: 'id_editorial',
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
}


class Editorial extends Model {
  static associate(models) {
    this.hasMany(models.Libro, {
      as: 'libro',
      foreignKey: 'idEditorial'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: Editorial_TABLE,
      modelName: 'Editorial',
      timestamps: false
    }
  }
}

module.exports = { Editorial, EditorialSchema, Editorial_TABLE };