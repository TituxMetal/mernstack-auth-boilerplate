const passport = require('passport')
const GithubTokenStrategy = require('passport-github-token')

const User = require('../models/user')
const { passportGithubClientId, passportGithubClientSecret } = require('../config')

const githubToken = async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ 'github.id': profile.id })

    if (existingUser) {
      return done(null, existingUser)
    }

    const newUser = new User({
      method: 'github',
      github: {
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
  clientID: passportGithubClientId,
  clientSecret: passportGithubClientSecret
}

passport.use('githubToken', new GithubTokenStrategy(options, githubToken))
