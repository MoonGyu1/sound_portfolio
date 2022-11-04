import axios from 'axios';

const client = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000 * 10,
});

export default client;
