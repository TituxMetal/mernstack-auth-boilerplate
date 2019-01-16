const passport = require('passport')

require('./jwtStrategy')
require('./localStrategy')
require('./googleStrategy')
require('./githubStrategy')

const options = { session: false }

module.exports = {
  jwtStrategy: passport.authenticate('jwt', options),
  localStrategy: passport.authenticate('local', options),
  googleStrategy: passport.authenticate('googleToken', options),
  githubStrategy: passport.authenticate('githubToken', options)
}
