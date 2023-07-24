import axios from "./axiosInstance";
import {
    SignupProps,
    ExistNicknameProps,
    LoginProps,
    LoginResponse,
    GeneralResponse,
    RefreshTokenResponse,
} from "../types/type";

export const signupAction = async (
    inputData: SignupProps
): Promise<GeneralResponse> => {
    const axiosResult = axios
        .post("/auth/signup", inputData)
        .then(response => response.data);
    return axiosResult;
};

export const existNicknameAction = async (
    inputData: ExistNicknameProps
): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .get("/auth/signup/exist-nickname", {
            params: {
                nickname: inputData.nickname,
            },
        })
        .then(response => response.data);
    return axiosResult;
};

export const loginAction = async (
    inputData: LoginProps
): Promise<LoginResponse> => {
    const axiosResult = await axios
        .post("/auth/login", inputData)
        .then(response => response.data);
    return axiosResult;
};

// 수정 예정
export const logoutAction = async (): Promise<GeneralResponse> => {
    const refreshtoken = localStorage.getItem("refreshToken");
    const axiosResult = await axios
        .post("/auth/logout", {
            headers: {
                Authorization: `Bearer ${refreshtoken}`,
            },
        })
        .then(response => response.data);
    return axiosResult;
};

export const refreshTokenAction = async (): Promise<RefreshTokenResponse> => {
    const refreshtoken = localStorage.getItem("refreshToken");
    const axiosResult = await axios
        .post("/auth/token", {
            headers: {
                Authorization: `Bearer ${refreshtoken}`,
            },
        })
        .then(response => response.data);
    return axiosResult;
};
