const passport = require('passport')

require('./jwtStrategy')
require('./localStrategy')

const options = { session: false }

module.exports = {
  jwtStrategy: passport.authenticate('jwt', options),
  localStrategy: passport.authenticate('local', options)
}
