import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.9:3033',
});
export default api;
