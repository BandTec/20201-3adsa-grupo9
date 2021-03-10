import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8080/',
    // baseURL: 'http://3.232.122.144:8080/',
    baseURL: 'http://3.232.122.144/',
})

export default api;