import axios from 'axios'
import router from '../router'

const service=axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout:10000
})

service.interceptors.request.use(
	config =>{
		const token = localStorage.getItem('token')
		if(token){
			config.headers.Authorization=`Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		if(error.response && error.response.status === 401){
			localStorage.removeItem('token')
			router.push("/login")
		}
		return Promise.reject(error)
	}
)

export default service