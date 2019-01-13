const { schemas } = require('./userSchema')
const bodyValidator = require('../middlewares/bodyValidator')

const validateRegister = bodyValidator(schemas.register)
const validateLogin = bodyValidator(schemas.login)

module.exports = {
  validateRegister,
  validateLogin
}
