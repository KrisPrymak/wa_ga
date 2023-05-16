import axios from 'axios'


export const instance = axios.create({
	withCredentials: false,
	baseURL: 'https://api.green-api.com/',
})