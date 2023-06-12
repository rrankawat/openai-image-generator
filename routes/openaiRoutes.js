const express = require('express')
const router = express.Router()

const { generateImage } = require('../controllers/openaiController')

router.post('/gen-image', generateImage)

module.exports = router
