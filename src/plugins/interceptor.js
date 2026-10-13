import axios from 'axios';

// Both local Vite proxy and Vercel serverless function use /api/pixabay
const baseURL = '/api/pixabay';

const httpClient = axios.create({ baseURL });

httpClient.interceptors.request.use(request => {
    return request;
});

export default httpClient;