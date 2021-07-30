/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 7/30/21
 * Time: 3:43 PM
 */

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