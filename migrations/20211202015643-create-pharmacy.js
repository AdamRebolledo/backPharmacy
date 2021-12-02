'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pharmacies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locale_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      comuna_nombre: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      fk_comuna: {
        type: Sequelize.STRING
      },
      fk_region: {
        type: Sequelize.STRING
      },
      funcionamiento_dia: {
        type: Sequelize.STRING
      },
      funcionamiento_hora_apertura: {
        type: Sequelize.STRING
      },
      funcionamiento_hora_cierre: {
        type: Sequelize.STRING
      },
      local_direccion: {
        type: Sequelize.STRING
      },
      local_id: {
        type: Sequelize.STRING
      },
      local_lat: {
        type: Sequelize.STRING
      },
      local_lng: {
        type: Sequelize.STRING
      },
      local_nombre: {
        type: Sequelize.STRING
      },
      local_telefono: {
        type: Sequelize.STRING
      },
      localidad_nombre: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pharmacies');
  }
};