const { Model, DataTypes, Sequelize } = require('sequelize');

const PRESTAMO_TABLE = 'prestamo';

const PrestamoSchema = {
  idLector: {
    allowNull: false,
    primaryKey: true,
    field: 'id_lector',
    type: DataTypes.INTEGER
  },  
  idLibro: {
    allowNull: false,
    primaryKey: true,
    field: 'id_libro',
    type: DataTypes.INTEGER
  },
  fechaPrestamo: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_prestamo',
    defaultValue: Sequelize.NOW
  },
  fechaDevolucion: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_devolucion'
  },
  devuelto: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  fechaPago: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_pago'
  },
  fechaVencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_vencimiento'
  } 
}

class Prestamo extends Model {
  static associate() {
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