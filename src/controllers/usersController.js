const jwt = require('jsonwebtoken')

const User = require('../models/user')
const { jwtSecret } = require('../config')

signToken = user => {
  return jwt.sign({
    iss: 'Authenticator',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1) // Current time + 1 day ahead
  }, jwtSecret)
}

module.exports = {
  register: async (req, res, next) => {
    const { name, email, password } = req.value.body

    const foundUser = await User.findOne({ 'local.email': email })

    if (foundUser) {
      return res.status(403).json({ errors: { global: 'User already exists: change your name or email' } })
    }

    const newUser = new User({
      method: 'local',
      local: { name, email, password }
    })

    await newUser.save()

    const token = await signToken(newUser)

    return res.status(200).json({ token })
  },

  login: async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ 'local.email': email })
    
    if (await user && await user.isValidPassword(password)) {
      const token = await signToken(user)

      return res.status(200).json({ token })
    }

    return res.status(401).json({ errors: { global: 'Invalid credentials' } })
  },

  secret: async (req, res, next) => {
    return res.status(200).json({ secret: 'Secret resource' })
  }
}
