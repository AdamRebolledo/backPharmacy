'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pharmacy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pharmacy.init({
    locale_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    comuna_nombre: DataTypes.STRING,
    fecha: DataTypes.STRING,
    fk_comuna: DataTypes.STRING,
    fk_region: DataTypes.STRING,
    funcionamiento_dia: DataTypes.STRING,
    funcionamiento_hora_apertura: DataTypes.STRING,
    funcionamiento_hora_cierre: DataTypes.STRING,
    local_direccion: DataTypes.STRING,
    local_id: DataTypes.STRING,
    local_lat: DataTypes.STRING,
    local_lng: DataTypes.STRING,
    local_nombre: DataTypes.STRING,
    local_telefono: DataTypes.STRING,
    localidad_nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pharmacy',
  });
  return pharmacy;
};