const Category = require('../models/categories')
const Mobiles = require('../models/mobile')
const Electronics = require('../models/Electronics')
const { Op } = require('sequelize')

const saveData = async (req, res) => {
  try {
    const resp = await Category.create(req.body, {
      include: [
        {
          model: Mobiles
        },
        {
          model: Electronics
        }
      ]
    })

    res.status(202).json({
      response: resp,
      message: 'success'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'failed!...'
    })
  }
}
const GetAllRecords = async (req, res) => {
  try {
    let resp
    if (req.body.id) {
      resp = await Category.findAll({
        where: {
          id: req.body.id
        },

        include: [
          {
            model: Mobiles
          },
          {
            model: Electronics
          }
        ]
      })
    } else {
      resp = await Category.findAll({
        include: [
          {
            model: Mobiles
          },
          {
            model: Electronics
          }
        ]
      })
    }
    res.status(202).json({
      response: resp,
      message: 'success'
    })
  } catch (error) {
    console.log(error.message)
    res.status(404).json({
      response: null,
      message: 'failed!...'
    })
  }
}
const paginationAndFiltering = async (req, res) => {
  try {
    const { size, skip } = req.body

    const resp = await Category.findAll({
      where: {
        id: req.body.id
      },
      include: [
        {
          model: Mobiles,
          where: {
            [Op.or]: [
              {
                Model: {
                  [Op.like]: `%${req.body.Model}%`
                }
              },
              {
                Storage: {
                  [Op.like]: `%${req.body.Storage}%`
                }
              }
            ]
          },
          limit: size,
          offset: skip
        },
        {
          model: Electronics,
          where: {
            [Op.or]: [
              {
                p_name: {
                  [Op.like]: `%${req.body.p_name}%`
                }
              },
              {
                BrandName: {
                  [Op.like]: `%${req.body.BrandName}%`
                }
              }
            ]
          },
          limit: size,
          offset: skip
        }
      ]
    })
    res.send(resp)
  } catch (error) {
    console.log(error)
  }
}

//Delete Operation

const deleteRecord = async (req, res) => {
  try {
    const resp = await Category.destroy({
      where: {
        id: req.body.id
      }
    })
    res.status(201).json({
      response: resp,
      message: 'success'
    })
  } catch (err) {
    res.status(400).json({
      response: null,
      message: err.message
    })
  }
}
module.exports = {
  saveData,
  GetAllRecords,
  paginationAndFiltering,
  deleteRecord
}
