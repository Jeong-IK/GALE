import axios from "axios";
import {
    SignupProps,
    CheckNicknameExistProps,
    LoginProps,
    LoginResponse,
} from "../types/type";

export const signupAction = (inputData: SignupProps) => {
    axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
            email: inputData.email,
            password: inputData.passwd,
            confirmpassword: inputData.cfmPasswd,
            nickname: inputData.nickname,
        })
        .then(response => response);
};

export const checkNicknameExist = (inputData: CheckNicknameExistProps) => {
    if (!inputData) return;
    axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/exist-nickname`, {
            params: { Nickname: inputData.nickname },
        })
        .then(response => response);
};

export const loginAction = async (
    inputData: LoginProps
): Promise<LoginResponse> => {
    console.log(1);
    const result = await axios
        .post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            {
                inputEmail: inputData.email,
                Password: inputData.passwd,
            },
            { withCredentials: true }
        )
        .then(response => {
            console.log(response.data);
            return response.data;
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
