import axios from 'axios';
// 59291712/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;