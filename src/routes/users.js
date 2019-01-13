const router = require('express-promise-router')()

const UsersController = require('../controllers/usersController')
const { jwtStrategy, localStrategy } = require('../passport')
const { validateRegister, validateLogin } = require('../validation')

router.post('/register', validateRegister, UsersController.register)
router.post('/login', validateLogin, localStrategy, UsersController.login)
router.get('/secret', jwtStrategy, UsersController.secret)

module.exports = router
