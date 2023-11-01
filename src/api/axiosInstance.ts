import axios from "axios";
 import { refreshTokenAction } from "src/api/memberapi";

const clientAxios = axios.create();
clientAxios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

clientAxios.interceptors.request.use(
    config => {
        const refresh = localStorage.getItem("refreshToken");        
        const token = localStorage.getItem("accessToken");
        if(token || refresh){
            if(config.url === "/user/token" || config.url === "/user/logout"){
                config.headers!.Authorization = `Bearer ${refresh}`;
                console.log(config.headers!.Authorization);
                return config;
            }
            config.headers!.Authorization = `Bearer ${token}`;
            return config;
        }
        return config;
    },

    error => Promise.reject(error)
);


let isRetrycheck = false;

const refreshtokenfunc = async () => {
    const response = await refreshTokenAction();
    if(response){
        // refreshtokenfunc 에서 410오류가 발생하지 않았으므로 다시 isRetrycheck를 false로 변경
        isRetrycheck = false;
        const newtoken = response?.accessToken;
        return newtoken;
    }    
}

// 액세스토큰 재발급 API 요청 시 401오류가 발생한다면 리프레시 토큰 또한 만료된 것으로 간주하여 클라이언트 측에 저장된 토큰을 삭제
const frontLogoutfunc = () => {
    localStorage.clear();
    isRetrycheck = false;
}

clientAxios.interceptors.response.use(
    res => res,
    async error => {
        console.log(error);
        // 401오류가 발생한 API 요청 저장
        const originalConfig = error.config;
        // isRetreycheck가 참일 경우 리프레시 토큰이 만료된 것으로 확인 
        if(error.response.status === 401){
            if(!isRetrycheck){
            // 액세스 토큰 발급 및 저장
            isRetrycheck = true;
            const newToken = await refreshtokenfunc();
            if (newToken) {
                localStorage.setItem("accessToken", newToken);
                // 마지막 API 요청에 재발급 받은 토큰을 적용하여 재요청
                originalConfig.headers.Authorization = `Bearer ${newToken}`;
                return axios(originalConfig);
            }
        }
        // 리프레시 토큰 만료 시 브라우저에 남은 토큰 삭제 
        frontLogoutfunc();

    }
    return axios(originalConfig);
    }
);

export default clientAxios;
