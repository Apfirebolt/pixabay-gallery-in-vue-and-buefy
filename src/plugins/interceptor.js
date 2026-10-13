import axios from 'axios';

const isProduction = import.meta.env.PROD || import.meta.env.VITE_ENVIRONMENT === 'production';

const apiKey = import.meta.env.VITE_PIXABAY_KEY;
const baseURL = isProduction && apiKey 
  ? `https://pixabay.com/api/?key=${apiKey}` 
  : '/api/pixabay';

const httpClient = axios.create({ baseURL });

httpClient.interceptors.request.use(request => {
    return request;
});

export default httpClient;