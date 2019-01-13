const mongoose = require('mongoose')

const { mongoUri, mongoOptions } = require('../config')

module.exports = () => {
  mongoose.connect(mongoUri, mongoOptions)
    .then(() => console.log(`Mongo db connected at ${mongoUri}`))
    .catch(err => console.error(err))
}
