const Sequelize = require('sequelize')
const sequelize = require('../database')
// const Electronics = require('../models/electronics')
const Electronics = sequelize.define(
  'Electronics',
  {
    E_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    p_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    BrandName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = Electronics
