import axios from 'axios'

const apiUri = 'http://localhost:5000/api/users'

export const registerRequest = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`${apiUri}/register`, { name, email, password })
    return res.data
  } catch (err) {
    return err.response.data
  }
}
