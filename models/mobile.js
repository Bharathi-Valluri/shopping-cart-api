const Sequelize = require('sequelize')
const sequelize = require('../database')
// const Electronics = require('../models/electronics')
const Mobiles = sequelize.define(
  'Mobiles',
  {
    M_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    Model: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Storage: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = Mobiles
