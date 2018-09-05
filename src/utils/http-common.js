import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.BASE_API, // api base_url
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000 // request timeout
})
