const request = require('supertest')
const faker = require('faker')
const mongoose = require('mongoose')

process.env.mongoUri = 'mongodb://mongo:27017/testAuthApi'
const server = require('../../src/server')
let token

describe('Users routes', () => {
  const register = ('/api/users/register')
  const login = ('/api/users/login')
  const secret = ('/api/users/secret')
  const user = {
    name: faker.internet.userName(), email: faker.internet.email(), password: faker.internet.password()
  }
  const preSave = { name: 'testuser', email: 'test@user.com', password: faker.internet.password() }

  beforeAll(async () => {
    const res = await request(server).post(register).send(preSave)

    expect(res.status).toEqual(200)
    token = `Bearer ${res.body.token}`
  })

  afterAll(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  })

  describe('Register route', () => {
    it('should create new user if email not found', async () => {
      const res = await request(server).post(register).send(user)

      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('token')
    })

    it('should return 403 if email already exists', async () => {
      const res = await request(server).post(register).send(preSave)

      expect(res.status).toEqual(403)
      expect(res.body.errors).toEqual({ email: 'Email already exists' })
    })
  })

  describe('login', () => {
    it('should return error 400 if user email and password empty', async () => {
      let user = {}
      const res = await request(server).post(login).send(user)

      expect(res.status).toEqual(400)
    })

    it('should return error 401 if wrong password', async () => {
      const { email } = { ...user }
      const password = 'wrongPassword'
      const res = await request(server).post(login).send({ email, password })

      expect(res.status).toEqual(401)
      expect(res.text).toEqual('Unauthorized')
    })

    it('should return error 401 if wrong email', async () => {
      const email = 'wrong@email.com'
      const { password } = { ...user }
      const res = await request(server).post(login).send({ email, password })

      expect(res.status).toEqual(401)
      expect(res.text).toEqual('Unauthorized')
    })

    it('should return 200 and our token', async () => {
      const { email, password } = { ...preSave }
      const res = await request(server).post(login).send({ email, password })

      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('token')
    })
  })

  describe('secret', () => {
    it('should return error 401 when invalid token or no token given', async () => {
      const res = await request(server).get(secret).set('Authorization', 'token')

      expect(res.status).toEqual(401)
      expect(res.text).toEqual('Unauthorized')
    })

    it('should return 200 and return secret resource', async () => {
      const res = await request(server).get(secret).set('Authorization', token)

      expect(res.status).toEqual(200)
      expect(res.body).toEqual({ "secret": "Secret resource" })
    })
  })
})
