import axios from 'axios';

// Ensure the proxy path ends correctly
const baseURL = import.meta.env.DEV ? '/api/pixabay/' : 'https://pixabay.com/api/';

const httpClient = axios.create({ baseURL });

httpClient.interceptors.request.use(request => {
    console.log('Proxying Request:', request.url, request.params);
    return request;
});

export default httpClient;