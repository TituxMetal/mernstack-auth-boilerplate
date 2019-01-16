const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

const local = async (email, password, done) => {
  try {
    const user = await User.findOne({ 'local.email': email })

    if (!user) {
      return done(null, false)
    }

    const isMatch = await user.isValidPassword(password)

    if (!isMatch) {
      return done(null, false)
    }

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}

const options = {
  usernameField: 'email'
}

passport.use(new LocalStrategy(options, local))
