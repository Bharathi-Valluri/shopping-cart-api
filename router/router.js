const category_controller = require('../controller/categoryController')
const router = require('express').Router()
router.post('/saveCategoriesData', category_controller.saveData)
router.get('/findAllRecords', category_controller.GetAllRecords)
router.get('/filteringTheRecords', category_controller.paginationAndFiltering)
router.delete('/deleteAllRecords', category_controller.deleteRecord)

module.exports = router
