const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')

const isProd = process.env.NODE_ENV === 'production'

!isProd && require('dotenv').config()

// Start express
const app = express()

// Start mongoose
const mongoose = require('./database/mongo')
mongoose()

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-with, Content-Type, Accept, Authorization')
  next()
})

app.use(passport.initialize())
require('./passport/index')

// Morgan logs if not in test environment
process.env.NODE_ENV !== 'test' && app.use(morgan('dev'))
app.use(bodyParser.json())

// Load routes
app.use('/api/users', require('./routes/users'))

module.exports = app
