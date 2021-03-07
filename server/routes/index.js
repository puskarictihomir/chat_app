const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

router.post('/register', indexController.user_create_post)

module.exports = router