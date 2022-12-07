const Sequelize = require('sequelize')
const sequelize = require('../database')
const Mobiles = require('../models/mobile')
const Electronics = require('../models/Electronics')
const Category = sequelize.define(
  'Category',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

Category.hasMany(Mobiles, { onDelete: 'CASCADE' }),
  Mobiles.belongsTo(Category, { onDelete: 'CASCADE' })
Category.hasMany(Electronics, { onDelete: 'CASCADE' }),
  Electronics.belongsTo(Category, { onDelete: 'CASCADE' })

module.exports = Category
