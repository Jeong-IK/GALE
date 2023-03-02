import axios from "axios";
import { useRefreshToken } from "../hooks/useRefreshToken";

const clientAxios = axios.create();
clientAxios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

clientAxios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    error => Promise.reject(error)
);

clientAxios.interceptors.response.use(
    res => res,
    async error => {
        const originalConfig = error.config;
        if (error.response.status === 401) {
            await useRefreshToken();
            const token = localStorage.getItem("accessToken");
            originalConfig.headers.Authorization = `Bearer ${token}`;
            return axios(originalConfig);
        }
    }
);

export default clientAxios;
