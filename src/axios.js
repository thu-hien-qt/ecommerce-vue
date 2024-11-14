import axios from "axios";

window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://ecommerce.local/api/";
const token = '83dac5c7725b9614503f97fe4ee5ae2c';

// Sử dụng interceptor để thêm headers cho mọi yêu cầu
axios.interceptors.request.use(function(config) {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
    };
    return config;
}, function(error) {
    return Promise.reject(error);
});

export default axios;
