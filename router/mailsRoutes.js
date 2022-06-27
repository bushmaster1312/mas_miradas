const express = require('express')
const { envioEmail } = require('../controllers/emailsControllers')
const router = express.Router()



router.post('/', envioEmail)


module.exports = router;