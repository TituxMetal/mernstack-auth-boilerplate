const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token')

const User = require('../models/user')
const { passportFacebookClientId, passportFacebookClientSecret } = require('../config')

const facebookToken = async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('accessToken', accessToken)
    console.log('refreshToken', refreshToken)
    console.log('profile', profile)
    const existingUser = await User.findOne({ 'facebook.id': profile.id })

    if (existingUser) {
      console.log('user exists')
      return done(null, existingUser)
    }

    console.log('create new user')
    const newUser = new User({
      method: 'facebook',
      facebook: {
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
  clientID: passportFacebookClientId,
  clientSecret: passportFacebookClientSecret
}

passport.use('facebookToken', new FacebookTokenStrategy(options, facebookToken))
