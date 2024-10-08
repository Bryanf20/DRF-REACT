import { useEffect } from "react";
import axiosInstance from "../axios"
import { useNavigate } from "react-router-dom"

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
        console.log(response); //
		navigate('/login');
	});

    return <div>Logout</div>
}