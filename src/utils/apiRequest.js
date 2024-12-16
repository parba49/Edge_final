import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'https://real-time-amazon-data.p.rapidapi.com/',
});

export default apiRequest;
