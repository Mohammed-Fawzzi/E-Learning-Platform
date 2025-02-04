import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default api 