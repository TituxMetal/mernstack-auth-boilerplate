# Mern Auth Boilerplate Project

# Server side, api

## Entrypoints
POST /api/users/register (payload: email, name, password) (res: { errors } || { user })
POST /api/users/login (payload: email, password) (res: { errors } || { token })
GET /api/users/secret (res: { secret })
