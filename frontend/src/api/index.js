import axios from 'axios'

const apiUri = 'http://localhost:5000/api/users'

export const authRequest = async ({ name, email, password }, request) => {
  let data
  const uri = `${apiUri}/${request}`

  switch (request) {
    case 'register':
      data = { name, email, password }
      break
    case 'login':
      data = { email, password }
      break
    default: break
  }

  try {
    const res = await axios.post(uri, data)
    
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export const secretRequest = async (token) => {
  const uri = `${apiUri}/secret`

  try {
    const res = await axios.get(uri, { headers: { 'Authorization': `Bearer ${token}` } })

    return res.data
  } catch (error) {
    return false
  }
}
