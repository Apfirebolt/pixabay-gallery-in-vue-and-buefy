import axios from 'axios';

let baseURL = 'https://pixabay.com/api/?key=' + import.meta.env.VITE_PIXABAY_KEY;


const httpClient = axios.create({ baseURL });

// print request headers
httpClient.interceptors.request.use(request => {

    console.log('Starting Request', import.meta.env);
    return request;
});

export default httpClient;