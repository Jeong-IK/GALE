import axios from "axios";
import {
    SignupProps,
    ExistNicknameProps,
    LoginProps,
    LoginResponse,
    GeneralResponse,
} from "../types/type";

export const signupAction = (
    inputData: SignupProps
): Promise<GeneralResponse> => {
    const signupResult = axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
            email: inputData.email,
            password: inputData.passwd,
            confirmpassword: inputData.cfmPasswd,
            nickname: inputData.nickname,
        })
        .then(response => response.data.data);
    return signupResult;
};

export const existNicknameAction = (
    inputData: ExistNicknameProps
): Promise<GeneralResponse> => {
    const existResult = axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/exist-nickname`, {
            params: { Nickname: inputData.nickname },
        })
        .then(response => response.data.data);
    return existResult;
};

export const loginAction = async (
    inputData: LoginProps
): Promise<LoginResponse> => {
    const result = await axios
        .post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            {
                email: inputData.email,
                password: inputData.passwd,
            },
            { withCredentials: true }
        )
        .then(response => {
            console.log(response.data.data);
            return response.data.data;
        });
    return result;
};

export const logoutAction = () => {
    if (!localStorage.getItem("accessToken")) return;

    axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, [
            {
                // Email: "vkxld134@naver.com",
                Token: localStorage.getItem("accessToken"),
            },
            {
                withCredentials: true,
            },
        ])
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response.data.message);
        });
};
