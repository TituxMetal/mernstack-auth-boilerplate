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

app.use(passport.initialize())
require('./passport/index')

// Morgan logs if not in test environment
process.env.NODE_ENV !== 'test' && app.use(morgan('dev'))
app.use(bodyParser.json())

// Load routes
app.use('/api/users', require('./routes/users'))

module.exports = app
