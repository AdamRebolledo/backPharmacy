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
    locale_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pharmacy',
  });
  return pharmacy;
};