import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/todos',
	timeout: 1000,
});
