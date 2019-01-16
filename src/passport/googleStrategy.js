const passport = require('passport')
const GooglePlusTokenStrategy = require('passport-google-plus-token')

const User = require('../models/user')
const { passportGoogleClientId, passportGoogleClientSecret } = require('../config')

const googleToken = async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ 'google.id': profile.id })

    if (existingUser) {
      return done(null, existingUser)
    }

    const newUser = new User({
      method: 'google',
      google: {
        id: profile.id,
        email: profile.emails[0].value
      }
    })

    await newUser.save()
    done(null, newUser)
  } catch (error) {
    done(error, false)
  }
}

const options = {
  clientID: passportGoogleClientId,
  clientSecret: passportGoogleClientSecret
}

passport.use('googleToken', new GooglePlusTokenStrategy(options, googleToken))
