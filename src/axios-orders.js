import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-7a642.firebaseio.com/'
});

export default instance;