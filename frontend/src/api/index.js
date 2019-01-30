import axios from 'axios'

export const apiRequest = async ({ name, email, password }, request) => {
  const apiUri = 'http://localhost:5000/api/users'
  let data
  const uri = `${apiUri}/${request}`

  switch (request) {
    case 'register':
      data = { name, email, password }
      break
    case 'login':
      data = { email, password }
      break
  }

  try {
    const res = await axios.post(uri, data)
    return res.data
  } catch (error) {
    return error.response.data
  }
}
