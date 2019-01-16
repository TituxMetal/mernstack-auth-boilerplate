const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google'],
    required: true
  },
  local: {
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
  try {
    if (this.method !== 'local') {
      next()
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(this.local.password, salt)
    this.local.password = passwordHash

    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (userPassword) {
  try {
    return await bcrypt.compare(userPassword, this.local.password)
  } catch (error) {
    throw new Error(error)
  }
}

const User = mongoose.model('user', userSchema)

module.exports = User
