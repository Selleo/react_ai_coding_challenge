import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

// axios.interceptors.request.use(
//   async (config) => {
//     config.headers['Content-Type'] = `application/vnd.api+json`
//
//     try {
//       const authToken = somehowGetAuthToken()
//       config.headers['Authorization'] = `Bearer ${authToken}`
//     } catch {}
//
//     return config
//   },
//   (error) => {
//     Promise.reject(error)
//   }
// )

export default axios
