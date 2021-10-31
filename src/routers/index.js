const router = require('express').Router()

// controllers
const LoginController = require('../controllers/login/index')
const CheckLoginController = require('../controllers/check/index')

// routers
router.post('/login', LoginController)
router.post('/check', CheckLoginController)


module.exports = router