import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.coincap.io/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient