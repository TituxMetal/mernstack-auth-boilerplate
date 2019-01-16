module.exports = {
  mongoOptions: { useCreateIndex: true, useNewUrlParser: true },
  mongoUri: process.env.mongoUri || 'mongodb://mongo:27017/authApi',
  jwtSecret: process.env.jwtSecret || 'jsonwebtokensecret',
  passportGoogleClientId: process.env.passportGoogleClientId,
  passportGoogleClientSecret: process.env.passportGoogleClientSecret,
  passportGithubClientId: process.env.passportGithubClientId,
  passportGithubClientSecret: process.env.passportGithubClientSecret,
  passportFacebookClientId: process.env.passportFacebookClientId,
  passportFacebookClientSecret: process.env.passportFacebookClientSecret
}
