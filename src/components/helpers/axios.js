import axios from 'axios';
import {url} from '../../urlConfig';


const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL:url,
    headers:{
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;