# Mern Auth Boilerplate Project

# Server side, api

## Entrypoints

- POST /api/users/register (payload: email, name, password) (res: { errors } || { user })
- POST /api/users/login (payload: email, password) (res: { errors } || { token })
- GET /api/users/secret (res: { secret })

## Run the project
First install dependencies with ```yarn install```

If you have MongoDb installed, you can start your mongodb server and add mongoUri in your environment variables.

If you have Docker installed you can run ```yarn docker:mongo```, this command will create a mongoDev container.

Run the project with ```yarn start-dev``` for development mode or ```yarn start``` for production mode.

With curl you can run requests to the api.

Exemples:

For register a user, a token will be returned
```
curl -d '{"name": "your name", "email": "your@email.com", "password": "yoursupersecretpassword"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/users/register
```

For login a user, a token will be returned
```
curl -d '{"email": "your@email.com", "password": "yoursupersecretpassword"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/users/login
```

For accessing the secret resource, secret resource will be returned
```
curl -H "Content-Type: application/json" -H "Authorization: Bearer theTokenReturnedByLoginOrRegisterRequest" -X GET http://localhost:5000/api/users/secret
```

## Build Docker image
To build Docker image simply run: ```docker build -t imageName .```

## Run api in a container
To run the api in a container, simply run: ```docker run --rm --name containerName -p 5000:5000 -d --link mongoDev:mongo imageName:latest```
