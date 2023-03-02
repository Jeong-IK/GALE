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
        .post("/auth/signup/exist-nickname", inputData)
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

export const logoutAction = async (): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .post("/auth/logout")
        .then(response => response.data);
    return axiosResult;
};

export const refreshTokenAction = async (): Promise<RefreshTokenResponse> => {
    const axiosResult = await axios
        .post("/auth/token")
        .then(response => response.data);
    return axiosResult;
};
