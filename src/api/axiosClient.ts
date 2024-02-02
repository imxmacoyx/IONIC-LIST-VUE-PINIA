import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7144/',
});

export default axiosClient;
