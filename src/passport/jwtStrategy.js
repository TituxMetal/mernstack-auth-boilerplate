const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { jwtSecret } = require('../config')
const User = require('../models/user')

const jwt = async (payload, done) => {
  try {
    const user = await User.findById(payload.sub)

    if (!user) {
      return done(null, false)
    }

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
}

passport.use(new JwtStrategy(options, jwt))
