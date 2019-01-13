module.exports = {
  mongoOptions: { useCreateIndex: true, useNewUrlParser: true },
  mongoUri: process.env.mongoUri || 'mongodb://mongo:27017/authApi',
  jwtSecret: process.env.jwtSecret || 'jsonwebtokensecret'
}