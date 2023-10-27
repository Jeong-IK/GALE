import axios from "axios";
 import { refreshTokenAction, logoutAction } from "src/api/memberapi";

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
const refreshtokenfunc = async () => {
    const response = await refreshTokenAction();
    console.log(response);
    const newtoken = response?.accessToken;
    return newtoken;
}

clientAxios.interceptors.response.use(
    res => res,
    async error => {
        const originalConfig = error.config;
        if(error.response.status === 401 && !originalConfig._retry)
            originalConfig._retry = true;

        const newToken = await refreshtokenfunc();
        if (newToken) {
            console.log(newToken);
            localStorage.setItem("accessToken", newToken);
            originalConfig.headers.Authorization = `Bearer ${newToken}`;
            return axios(originalConfig);
        }
        logoutAction();
        return Promise.reject(error);
    }
);

export default clientAxios;
