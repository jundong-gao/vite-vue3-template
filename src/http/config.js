import axios from 'axios'

const server = axios.create({
    baseURL: 'xxx',
    timeout: 20000
})



server.interceptors.request.use(config => {
    return config
}, err => {})


server.interceptors.response.use(response => {
    return response
}, err => {})



export default server