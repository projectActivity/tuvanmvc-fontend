import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://127.0.0.1:8004/api`,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
