import axios from 'axios'

// laravel-mix ではない場合 以下の２行は不要
const baseDomain = "http://localhost:3000/"
const baseUrl = `${baseDomain}v1/`
const getInstance = () => {
    const config = {
      baseURL: `${baseUrl}`,
    }
    return axios.create(config)
  }
  
const axiosInstance = getInstance()
axiosInstance.defaults.headers['Content-type'] = 'application/json'
axiosInstance.defaults.headers.Accept = 'application/json'
axiosInstance.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axiosInstance.defaults.withCredentials = true

export default axiosInstance
